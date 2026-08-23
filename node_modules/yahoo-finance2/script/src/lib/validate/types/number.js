"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.number = void 0;
const index_js_1 = require("../index.js");
const number = function number(input, schema, _ctx, errors, instancePath, dataCtx, schemaPath) {
    // YahooFinance types
    if (typeof input === "string") {
        const float = Number.parseFloat(input);
        if (Number.isNaN(float)) {
            errors.push({
                instancePath,
                schemaPath,
                keyword: "yahooFinanceType",
                message: "Number.parseFloat returned NaN",
                params: { schema },
                data: input,
            });
            return false;
        }
        (0, index_js_1.set)(dataCtx, float, instancePath);
        return true;
    }
    if (typeof input === "object" && input !== null) {
        if (Object.keys(input).length === 0) {
            // Value of {} becomes null
            // Note, TypeScript types should be "number | null"
            if (Array.isArray(schema.type) && schema.type.includes("null")) {
                (0, index_js_1.set)(dataCtx, null, instancePath);
                return true;
            }
            else {
                errors.push({
                    instancePath,
                    schemaPath,
                    keyword: "yahooFinanceType",
                    message: "Got {}->null for 'number', did you want 'number | null' ?",
                    params: { schema },
                    data: input,
                });
                return false;
            }
        }
        if ("raw" in input && typeof input.raw === "number") {
            (0, index_js_1.set)(dataCtx, input.raw, instancePath);
            return true;
        }
    }
    // Regular number validation follows
    if (typeof input !== "number") {
        errors.push({
            instancePath,
            schemaPath,
            message: "Expected a number'ish",
            data: input,
        });
        return false;
    }
    return true;
};
exports.number = number;
