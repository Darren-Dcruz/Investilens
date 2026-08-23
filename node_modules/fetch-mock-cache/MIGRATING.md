# Migrating fetch-mock-cache

## Table of Contents

- [From v2 to v3 (2026-07-08)](#from-v2-to-v3-2026-07-08)
- [From v1 to v2](#from-v1-to-v2)

## From v2 to v3 (2026-07-08)

v3 keeps the default cache behavior compatible with v2 for ordinary requests:
read from cache first, fetch on misses, then write the response. The main
migration work is around runtime support and requests that include sensitive
headers or query parameters.

BREAKING CHANGES:

- **Node.js support**

  - v2: Node.js 20+
  - v3: Node.js 22+

  Update local development, CI, and any package `engines` constraints before
  upgrading the Node runtime entrypoint.

- **Sensitive headers are redacted by default**

  v3 replaces values for these request and response headers before storing
  fixtures. Request headers also use the redacted values when hashing cache
  IDs:

  - `authorization`
  - `proxy-authorization`
  - `cookie`
  - `set-cookie`
  - `x-api-key`

  This prevents credentials from being committed in fixtures, but it changes
  cache IDs for requests whose fixture names included a header hash. Existing
  fixtures recorded with any of these headers will miss until they are
  re-recorded, or until header redaction is disabled.

- **Sensitive query parameters are redacted by default**

  v3 replaces values for these query parameters before storing the request URL
  and deriving cache IDs or file names:

  - `apikey`
  - `api_key`
  - `api-key`
  - `access_token`
  - `token`
  - `client_secret`
  - `secret`
  - `password`
  - `signature`
  - `sig`
  - `x-amz-signature`
  - `x-amz-security-token`
  - `x-amz-credential`

  The real network request is unchanged. Only the cached representation is
  redacted. Existing fixtures whose URLs contain one of these parameters will
  get new fixture IDs and file names under v3.

  The recommended migration is to inspect and remove the old sensitive
  fixtures, run once in record mode, then commit the newly redacted fixtures:

  ```bash
  FMC_CACHE_MODE=record pnpm test
  ```

  If you need temporary v2-compatible cache IDs while migrating, disable
  redaction when creating the cache:

  ```ts
  const fetchCache = createFetchCache({
    Store,
    redactHeaders: false,
    redactSearchParams: false,
  });
  ```

  Prefer re-recording redacted fixtures over keeping this compatibility mode,
  because disabling redaction can keep secrets in committed fixture files.

- **File-system store errors are stricter**

  v2 treated any file read or JSON parse failure as a cache miss. v3 only
  treats a missing fixture file as a miss. Invalid JSON, permission failures,
  and other read errors now throw instead of silently falling through to the
  network.

  If an upgrade starts failing on an existing fixture, fix the JSON or delete
  and re-record that fixture.

Notable additions and behavior changes:

- **Cache modes**

  v3 adds first-class cache modes. The default `auto` mode is the v2 behavior.

  | Mode | Reads cache | Writes cache | Cache miss behavior |
  | ---- | ----------- | ------------ | ------------------- |
  | `auto` | yes | yes | Fetch from network and cache the response |
  | `replay` | yes | no | Throw before reaching the network |
  | `record` | no | yes | Fetch from network and overwrite the cache |
  | `off` | no | no | Fetch from network without touching the cache |

  Set modes globally with `createFetchCache({ mode: "replay" })`, later with
  `fetchCache.options = { mode: "record" }`, for one call with
  `fetchCache.once({ mode: "off" })`, or through `FMC_CACHE_MODE`.

- **Global cache options**

  `id`, `mode`, `readCache`, and `writeCache` can now be passed to
  `createFetchCache` as defaults and changed through `fetchCache.options`.
  Existing `fetchCache.once(...)` calls still work.

- **Custom stores**

  Custom stores should expect `FMCCacheContent.request.url` and
  `FMCCacheContent.request.headers` to already be redacted unless the user
  disables or customizes redaction. Store method signatures remain compatible.

- **Direction-specific header redaction**

  If replay behavior depends on a sensitive response header, such as
  `set-cookie` rebuilding a cookie jar, configure request and response headers
  independently. `redactRequestHeaders` and `redactResponseHeaders` override
  the shared `redactHeaders` option for their respective direction.

  ```ts
  const fetchCache = createFetchCache({
    Store,
    redactResponseHeaders: [
      "authorization",
      "proxy-authorization",
      "cookie",
      "x-api-key",
    ],
  });
  ```

- **Bug fixes that may affect tests**

  - Passing a `Request` object now preserves its method, headers, and body on
    cache misses.
  - Promise-valued `readCache` options are awaited before cache lookup.
  - Invalid JSON-labeled response bodies are stored as text instead of
    throwing during recording.
  - Cache hits no longer mutate the stored fixture content by adding
    `X-FMC-Cache`.
  - The Deno runtime adapter now reports `runtime.name` as `deno`.

## From v1 to v2

BREAKING CHANGES:

- **Module system**

  - v1: CommonJS
  - v2: ESM

- **Runtime and Test Framework support**

  - v1: Node + Jest only.
  - v2: Node (node:test, jest, vitest), Bun, Deno

- Rename header `X-JFMC-Cache` to `X-FMC-Cache`

- **Constructor** has a new convention for its name and arguments.

  ```diff
  - import createCachingMock from "fetch-mock-cache";
  + import fetchCache from "fetch-mock-cache";

  - const cachingMock = createCachingMock({ store: new Store() });
  + const fetchCache = createFetchCache({ Store });
  ```

- **Internal API changes**
  - Rename all classes, interfaces, types, from `JFMC*` to `FMC*`
  - Internal API change efdf25b7b0a2e6ba6571c74ef022a5820cd09b8c,
    affects alternative Storage classes.
