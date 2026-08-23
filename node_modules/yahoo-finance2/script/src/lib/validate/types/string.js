"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.string = void 0;
const index_js_1 = require("../index.js");
const string = function string(input, schema, _ctx, errors, instancePath, dataCtx, schemaPath, refs) {
    if (schema.format === "date-time") {
        if (input instanceof Date) {
            // Validate existing date objects.
            // Generally we receive JSON but in the case of "historical", the
            // csv parser does the date conversion, and we want to validate
            // afterwards.
            return true;
        }
        if (typeof input === "number") {
            if (refs && refs[refs.length - 1] === "DateInMs") {
                // XXX TODO tmp workaround; actually need get the $ref name and check for "DateInMs"
                // if (input.toString().length >= 13) {
                (0, index_js_1.set)(dataCtx, new Date(input), instancePath);
                return true;
            }
            (0, index_js_1.set)(dataCtx, new Date(input * 1000), instancePath);
            return true;
        }
        if (typeof input === "object" && input !== null) {
            if (Object.keys(input).length === 0) {
                // Value of {} becomes null
                // Note, TypeScript types should be "data | null"
                // Untested but should work, just need a test case
                // throw new Error("Untested code path");
                if (Array.isArray(schema.type) && schema.type.includes("null")) {
                    (0, index_js_1.set)(dataCtx, null, instancePath);
                    return true;
                }
                else {
                    errors.push({
                        instancePath,
                        schemaPath,
                        keyword: "yahooFinanceType",
                        message: "Got {}->null for 'date', did you want 'date | null' ?",
                        params: { schema },
                        data: input,
                    });
                    return false;
                }
            }
            if ("raw" in input && typeof input.raw === "number") {
                (0, index_js_1.set)(dataCtx, new Date(input.raw * 1000), instancePath);
                return true;
            }
        }
        if (typeof input === "string") {
            if (input.match(/^\d{4,4}-\d{2,2}-\d{2,2}$/) ||
                input.match(/^\d{4,4}-\d{2,2}-\d{2,2}T\d{2,2}:\d{2,2}:\d{2,2}(\.\d{3,3})?Z$/)) {
                (0, index_js_1.set)(dataCtx, new Date(input), instancePath);
                return true;
            }
        }
        errors.push({
            instancePath,
            schemaPath,
            message: "Expecting date'ish",
            params: { schema },
            data: input,
        });
        return false;
    }
    if (typeof input !== "string") {
        errors.push({
            instancePath,
            schemaPath,
            message: "Expected a string",
            data: input,
        });
        return false;
    }
    if (schema.const && input !== schema.const) {
        errors.push({
            instancePath,
            schemaPath,
            message: "Invalid const value",
            data: input,
            params: { const: schema.const },
        });
        return false;
    }
    if (schema.enum && !schema.enum.includes(input)) {
        errors.push({
            instancePath,
            schemaPath,
            message: "Invalid enum value",
            data: input,
            params: { enum: schema.enum },
        });
        return false;
    }
    return true;
};
exports.string = string;
