import pkg from "../../deno.js";
let latestVersion = null;
export async function getLatestVersion() {
    if (latestVersion)
        return latestVersion;
    const response = await fetch(`https://registry.npmjs.org/yahoo-finance2/latest`);
    if (!response.ok) {
        throw new Error("Failed to fetch latest version");
    }
    const latestPkgJson = await response.json();
    latestVersion = latestPkgJson.version;
    return latestVersion;
}
let versionCheckResult = null;
export async function versionCheck() {
    if (versionCheckResult)
        return versionCheckResult;
    const latestVersion = await getLatestVersion();
    return (versionCheckResult = {
        current: pkg.version,
        latest: latestVersion,
        isLatest: latestVersion === pkg.version,
    });
}
export function _clearCache() {
    latestVersion = null;
    versionCheckResult = null;
}
