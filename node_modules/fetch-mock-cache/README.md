# fetch-mock-cache

Caching mock fetch implementation for all runtimes and frameworks.

Copyright (c) 2023 by Gadi Cohen. [MIT Licensed](./LICENSE.txt).

[![NPM Version](https://img.shields.io/npm/v/fetch-mock-cache?logo=npm)](https://www.npmjs.com/package/fetch-mock-cache)
[![JSR](https://jsr.io/badges/@gadicc/fetch-mock-cache)](https://jsr.io/@gadicc/fetch-mock-cache)
[![JSR Score](https://jsr.io/badges/@gadicc/fetch-mock-cache/score)](https://jsr.io/@gadicc/fetch-mock-cache)
![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/gadicc/jest-fetch-mock-cache/release.yml)
![Coverage](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/gadicc/26d0f88b04b6883e1a6bba5b9b344fab/raw/fetch-mock-cache-lcov-coverage.json)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)


## 🏁 Introduction

- 💡 **Tired of writing mocks?**  
  Skip manually crafting `fetch()` mocks — just run a real `fetch()` once and auto cache the result.

- ⚡ **Fast feedback loop**  
  Cached responses make tests run *much* faster — ideal for TDD (Test Driven Development) against real APIs.

- 👥 **Team & CI friendly**  
  Commit the cache to your repo so everyone (and your CI) benefits from consistent, speedy tests.

- 🔧 **Proven approach**  
  Used by [yahoo-finance2](https://www.npmjs.com/package/yahoo-finance2) to test 1400+ API calls in < 1s on every commit.

- 💬 **Open to ideas**  
  Feature requests and contributions welcome!

NB: upgrading from an earlier major version? See
[MIGRATING.md](./MIGRATING.md) for v2-to-v3 and v1-to-v2 notes. If you're
still using **v1** (formerly `jest-fetch-mock-cache`), the
[old README](https://github.com/gadicc/fetch-mock-cache/tree/1.x) remains
available.

## AI Agent Skill

Using an AI coding agent? This repo includes a
[fetch-mock-cache skill](./skills/fetch-mock-cache) with setup guidance:

```bash
npx skills add gadicc/fetch-mock-cache
```

## Quick Start

Generally your code will look something like this, but, **see further below** for
the [**exact code for different runtimes and testing frameworks**](#runtimes).

```ts
// Default for node runtime, see grid below for bun/deno.
import createFetchCache from "fetch-mock-cache";
// See list of possible stores, below.
import Store from "fetch-mock-cache/stores/fs";

const fetchCache = createFetchCache({ Store });

describe("cachingMock", () => {
  it("works with a JSON response", async (t) => {
    const url = "http://echo.jsontest.com/key/value/one/two";
    const expectedResponse = { one: "two", key: "value" };
    t.mock.method(globalThis, "fetch", fetchCache);

    for (let i = 0; i < 2; i++) {
      const response = await fetch(url);
      const data = await response.json();
      const expectedCacheHeader = i === 0 ? "MISS" : "HIT";
      expect(response.headers.get("X-FMC-Cache")).toBe(expectedCacheHeader);
      expect(data).toEqual(expectedResponse);
    }
  });
});
```

- The **first** time this runs, a _real_ request will be made to
  `jsontest.com`, and the result returned. But, it will also be
  saved to cache.

- **Subsequent requests** will return the cached copy without
  making an HTTP request.

- **Commit `tests/fixtures/http`** (default) to your repo for
  super fast tests in the future for all contributors and CI.

<a name="runtimes"></a>

## Supported runtimes and test frameworks

Click on the "Quick Start / Example" links to see a working test
implementation for your framework of choice.

| Runtime                         | Framework                                                          | Status                                                                                                                                                                                                                                                                                     | Quick Start / Example                                                                                                                           |
| ------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| [Node](https://nodejs.org/) 22+ | [`node:test`](https://nodejs.org/api/test.html)                    | ![Dynamic YAML Badge](https://img.shields.io/badge/dynamic/yaml?url=https%3A%2F%2Fgist.githubusercontent.com%2Fgadicc%2Ff66f0ad9395e4019ec5209719377650b%2Fraw%2Fedbb28289e9c452d4d1f482454dd02ff41a8b255%2Fresults.yaml&query=%24.node.native&logo=nodedotjs&label=%20&labelColor=%23ddd) | [direct](./tests/runtimes/node/src/native-direct-mock.spec.ts) or with [fetch-mock](./tests/runtimes/node/src/native-fetch-mock.spec.ts)        |
|                                 | [`jest`](https://jestjs.io/)                                       | ![Dynamic YAML Badge](https://img.shields.io/badge/dynamic/yaml?url=https%3A%2F%2Fgist.githubusercontent.com%2Fgadicc%2Ff66f0ad9395e4019ec5209719377650b%2Fraw%2Fedbb28289e9c452d4d1f482454dd02ff41a8b255%2Fresults.yaml&query=%24.node.jest&logo=jest&label=%20&labelColor=%23aaa)        | [direct](./tests/runtimes/node/src/jest-direct-mock.spec.ts) or with [jest-fetch-mock](./tests/runtimes/node/src/jest-fetch-mock.spec.ts)       |
|                                 | [`vitest`](https://vitest.dev/)                                    | ![Dynamic YAML Badge](https://img.shields.io/badge/dynamic/yaml?url=https%3A%2F%2Fgist.githubusercontent.com%2Fgadicc%2Ff66f0ad9395e4019ec5209719377650b%2Fraw%2Fedbb28289e9c452d4d1f482454dd02ff41a8b255%2Fresults.yaml&query=%24.node.vitest&logo=vitest&label=%20&labelColor=%23ddd)    | [direct](./tests/runtimes/node/src/vitest-direct-mock.spec.ts) or with [vitest-fetch-mock](./tests/runtimes/node/src/vitest-fetch-mock.spec.ts) |
| [Deno](https://deno.com/)       | [`deno test`](https://docs.deno.com/runtime/fundamentals/testing/) | ![Dynamic YAML Badge](https://img.shields.io/badge/dynamic/yaml?url=https%3A%2F%2Fgist.githubusercontent.com%2Fgadicc%2Ff66f0ad9395e4019ec5209719377650b%2Fraw%2Fedbb28289e9c452d4d1f482454dd02ff41a8b255%2Fresults.yaml&query=%24.deno.native&logo=deno&label=%20&labelColor=%23aaa)      | [direct](./tests/runtimes/deno/src/direct-mock.test.ts)                                                                                         |
| [Bun](https://bun.sh/)          | [`bun:test`](https://bun.sh/docs/cli/test)                         | ![Dynamic YAML Badge](https://img.shields.io/badge/dynamic/yaml?url=https%3A%2F%2Fgist.githubusercontent.com%2Fgadicc%2Ff66f0ad9395e4019ec5209719377650b%2Fraw%2Fedbb28289e9c452d4d1f482454dd02ff41a8b255%2Fresults.yaml&query=%24.bun.native&logo=bun&label=%20&labelColor=%23aaa)        | [direct](./tests/runtimes/bun/src/direct.spec.ts)                                                                                               |

## What's cached

Sample output from the Quick Start code above, when used with `NodeFSStore`:

```bash
$ cat tests/fixtures/http/echo.jsontest.com\!key\!value\!one\!two
```

```js
{
  "request": {
    "url": "http://echo.jsontest.com/key/value/one/two"
  },
  "response": {
    "ok": true,
    "status": 200,
    "statusText": "OK",
    "headers": {
      "access-control-allow-origin": "*",
      "connection": "close",
      "content-length": "39",
      "content-type": "application/json",
      "date": "Fri, 21 Jul 2023 16:59:17 GMT",
      "server": "Google Frontend",
      "x-cloud-trace-context": "344994371e51195ae21f236e5d7650c4"
    },
    "bodyJson": {
      "one": "two",
      "key": "value"
    }
  }
}
```

JSON bodies are stored as a decoded object in `bodyJSON` for increased
readability.  Text bodies are stored as a string in `bodyText`, and
binary bodies are stored as a Base64 encoded string in `bodyBase64`.

## Debugging

We use [debug](https://www.npmjs.com/package/debug) for debugging. E.g.:

```bash
$ DEBUG=fetch-mock-cache:* yarn test
yarn run v1.22.19
$ jest
  fetch-mock-cache:core Fetching and caching 'http://echo.jsontest.com/key/value/one/two' +0ms
  fetch-mock-cache:core Using cached copy of 'http://echo.jsontest.com/key/value/one/two' +177ms
 PASS  src/index.spec.ts
  cachingMock
    ✓ should work (180 ms)
```

## Available Stores

- [`stores/fs`](./src/stores/fs.ts) - use your runtime's FileSystem API to
  store cached requests to the filesystem, for persistance. These can be
  committed to your projects repository / source control for faster future
  testing, including for CI.

- [`stores/memory`](./src/stores/memory.ts) - keep the cache in memory.
  The cache will not persist and will be created again from scratch each
  time you run your code.

### Create your own Store

See also the [`store`](./src/store.ts) "root" class. Don't instantiate
directly; rather extend this class overriding at least `fetchContent` and
`storeContent`, and perhaps, `idFromRequest`, the constructor and others
according to your needs. Here's an example to combine with a database:

```ts
import FMCStore from "fetch-mock-cache/store";
import type { FMCCacheContent, FMCStoreOptions } from "fetch-mock-cache/store";
import db from "./db"; // your existing db

export default class MyStore extends FMCStore {
  async fetchContent(request: FMCCacheContent["request"]) {
    const _id = await this.idFromRequest(request);
    return (await db.collection("fmc").findOne({ _id }))?.content;
  }
  async storeContent(content: FMCCacheContent) {
    const _id = await this.idFromRequest(content.request);
    await db.collection("fmc").insertOne({ _id, content });
  }
}
```

## Overriding the Default Caching Behaviour

### Cache modes

By default, `fetch-mock-cache` runs in `auto` mode, which preserves the
original behavior: read from cache when possible, otherwise fetch from the
network and write the response to cache.

You can set a mode globally when creating the mock, change it later with
`fetchCache.options`, override it for the next call with `fetchCache.once`, or
set `FMC_CACHE_MODE` in the environment:

```ts
const fetchCache = createFetchCache({
  Store,
  mode: "replay",
});

fetchCache.options = { mode: "record" };
fetchCache.once({ mode: "off" });
```

```bash
FMC_CACHE_MODE=replay pnpm test
```

Precedence is: `fetchCache.once(...)`, then `fetchCache.options`, then
`FMC_CACHE_MODE`, then the built-in `auto` default. `FMC_CACHE_MODE` is
case-insensitive after trimming whitespace. Invalid selected values throw a
configuration error before any network request is made.

| Mode | Reads cache | Writes cache | Cache miss behavior |
| ---- | ----------- | ------------ | ------------------- |
| `auto` | yes | yes | Fetch from network and cache the response |
| `replay` | yes | no | Throw before reaching the network |
| `record` | no | yes | Fetch from network and overwrite the cache |
| `off` | no | no | Fetch from network without touching the cache |

### Passing options to be used for the next `fetch()` call

```ts
// These will be used for the next fetch call ONCE only.  However, `once()`
// may be called multiple times to queue options for multiple future calls.
fetchCache.once({
  /* options */
});
```

### Manually specifying an ID

Generally we don't need to think about cache IDs, as we can reliably
generate them from the `Request` object (e.g. based on URL and hashes
of the headers, body, etc.).

But sometimes, we may want to specify this manually, e.g.

1. **We'd rather use the _test name_** as the id, vs something URL-based.
2. **It can't be reliably generated**, e.g. formData with a random boundary.

In this case, we can:

```ts
fetchCache.once({ id: "mytest" });
fetch(/* ... */); // or code that uses fetch();
```

Make sure the `id` is relevant for your store. e.g. if using the fs store,
make sure `id` is a valid file name (the fs store will still append `.json`
at the end).

### Manually controlling cache behaviour

You can also pass the following to `fetchCache.once`:

```ts
{
  id?: string; // as above
  mode?: "auto" | "replay" | "record" | "off";
  /** True (default): use cached response if available; false: always fetch from network.
   * You can also provide a promise or function that returns a boolean or promise.
   */
  readCache?:
    | boolean
    | Promise<boolean>
    | ((...args: Parameters<FMCStore["fetchContent"]>) => boolean | Promise<boolean>);
  /** If a fetch was performed, should we write it to the cache?  Can be a boolean, a
   * promise, or a function that returns a boolean or promise.  In the case of a promise,
   * the write will open occur when the promise resolves, and AFTER the response is
   * returned.  This allows for more complex patterns, where e.g. you could rely on the
   * further processing of the response in other functions before deciding whether to
   * cache it or not, but does require some extra care.
   */
  writeCache?:
    | boolean
    | Promise<boolean>
    | ((...args: Parameters<FMCStore["storeContent"]>) => boolean | Promise<boolean>);
}
```

The same cache behavior options can be assigned to `fetchCache.options` for
suite-level defaults. Explicit `readCache` and `writeCache` values override the
defaults from the selected mode.

### Sensitive headers and query parameters are redacted by default

To prevent committing sensitive credentials (like session cookies, auth tokens, or API keys) to source control, the library automatically redacts values for both headers and query parameters in both the stored cache files and the computed cache-key hashes.

#### Redacted Headers
By default, the following headers are redacted:
- `authorization`
- `proxy-authorization`
- `cookie`
- `set-cookie`
- `x-api-key`

#### Redacted Query Parameters
By default, the following query parameters (matched case-insensitively) are redacted:
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

Redacting these headers and query parameters before hashing ensures key stability (e.g. CI runs without a real token or API key still replay cached fixtures recorded with one).

> [!WARNING]
> Because redaction alters the cache key, existing cache files for requests that carried any of these sensitive headers or query parameters will get new cache IDs and file names. You will need to delete those old cache files and re-record them.

#### Customizing or disabling redaction

Redaction can be configured when initializing the caching mock via the global
`redactHeaders` and `redactSearchParams` options. Use
`redactRequestHeaders` or `redactResponseHeaders` when the two directions need
different policies. Direction-specific options override `redactHeaders` for
that direction:

```ts
import createFetchCache from "fetch-mock-cache/runtimes/node";
import Store from "fetch-mock-cache/stores/fs";

// Disable all redactions
const fetchCache = createFetchCache({
  Store,
  redactHeaders: false,
  redactSearchParams: false,
});

// Customize redacted headers and search params
const fetchCacheCustom = createFetchCache({
  Store,
  redactHeaders: ["x-custom-secret-header"],
  redactSearchParams: ["custom_api_key", "session_token"],
});

// Redact request cookies, but retain response Set-Cookie headers when replay
// behavior depends on rebuilding a cookie jar.
const fetchCacheWithReplayCookies = createFetchCache({
  Store,
  redactRequestHeaders: [
    "authorization",
    "proxy-authorization",
    "cookie",
    "set-cookie",
    "x-api-key",
  ],
  redactResponseHeaders: [
    "authorization",
    "proxy-authorization",
    "cookie",
    "x-api-key",
  ],
});
```

#### Limitations

- **Request/Response Bodies**: Payload bodies (e.g., a JSON request payload containing a `token` or `password`) are NOT redacted.
- **Path-segment Secrets**: Secrets embedded in URL path segments (e.g., Slack webhook URLs like `/services/T.../B.../xxx` or Telegram `/bot<token>/` paths) cannot be automatically detected by name and are not redacted. Use custom cache IDs via `fetchCache.once({ id: "my-custom-id" })` to manually name such fixtures.

## Internal and Experimental Features

Internal and experimental features are generally prefixed by an underscore ("`_`").
You're welcome to use them, however, they are not part of our API contract - as such,
they may change or disappear at any time, _without following semantic versioning_.

Often these are used for new ideas that are still in development, where, we'd like
you to have easy access to them (and appreciate your feedback!), but, they're not
(yet) considered stable.

Current experiments:

None.

Previous experiments:

*  `_once()` has been promoted to `once()` after a long, successful testing period.

## Tips & Tricks

### Rewrite the cache only for failing tests

Use `FMC_CACHE_MODE=record` to refresh every fixture in a run, and
`FMC_CACHE_MODE=replay` in CI to guarantee that missing fixtures fail before
network access.

If you specifically want to rewrite a fixture only when its test fails, keep
that as a test-runner-specific wrapper and combine `record` mode with an async
`writeCache` decision:

```ts
function conditionalCache(onFinish: Promise<unknown | undefined>) {
  if (process.env.FMC_RECACHE_ON_FAILURE === "1") {
    fetchCache.once({
      mode: "record",
      writeCache: onFinish.then((error) => Boolean(error)),
    });
  }
}
```

`record` makes the request bypass the existing fixture. The `writeCache`
promise decides whether the fresh network response is committed after the test
result is known.

## TODO

- [x] Cache request headers too and hash them in filename / key / id.
- [ ] Browser-environment support. Please open an issue if you need this, and in what cases. jsdom?
- [x] Handle and store invalid JSON too?
