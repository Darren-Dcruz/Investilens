"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._null = void 0;
const index_js_1 = require("../index.js");
const _null = function _null(input, _schema, _ctx, errors, instancePath, dataCtx, schemaPath) {
    // YahooFinance type
    if (typeof input === "object" && input !== null &&
        Object.keys(input).length === 0) {
        (0, index_js_1.set)(dataCtx, null, instancePath);
        return true;
    }
    if (input !== null) {
        errors.push({
            instancePath,
            schemaPath,
            message: "Expected null",
            data: input,
        });
        return false;
    }
    return true;
};
exports._null = _null;
