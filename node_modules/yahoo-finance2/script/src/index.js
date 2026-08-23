"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @module YahooFinance
 */
require("../_dnt.polyfills.js");
require("../_dnt.polyfills.js");
const createYahooFinance_js_1 = __importDefault(require("./createYahooFinance.js"));
const modules = __importStar(require("./modules/index.js"));
const other = __importStar(require("./other/index.js"));
const allModules = { ...modules, ...other };
const createOpts = { modules: allModules };
/**
 * The full Yahoo Finance API client with all modules: `quote()`, `search()`, etc.
 *
 * @example
 * ```ts
 * import YahooFinance from "yahoo-finance2";
 *
 * const yahooFinance = new YahooFinance();
 * console.log(await yahooFinance.quote("AAPL"));
 * ```
 *
 * @see {@linkcode [createYahooFinance].YahooFinance YahooFinance} for instantiation options.
 * @see The full list of {@link [modules] main modules} and {@link [other] other modules}.
 * @see {@linkcode [createYahooFinance].createYahooFinance createYahooFinance} for creating an API client with custom modules (advanced use-cases only).
 */
const YahooFinance = (0, createYahooFinance_js_1.default)(createOpts);
exports.default = YahooFinance;
