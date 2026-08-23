"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLatestVersion = getLatestVersion;
exports.versionCheck = versionCheck;
exports._clearCache = _clearCache;
const deno_js_1 = __importDefault(require("../../deno.js"));
let latestVersion = null;
async function getLatestVersion() {
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
async function versionCheck() {
    if (versionCheckResult)
        return versionCheckResult;
    const latestVersion = await getLatestVersion();
    return (versionCheckResult = {
        current: deno_js_1.default.version,
        latest: latestVersion,
        isLatest: latestVersion === deno_js_1.default.version,
    });
}
function _clearCache() {
    latestVersion = null;
    versionCheckResult = null;
}
