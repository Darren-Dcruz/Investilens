import { set } from "../index.js";
export const _null = function _null(input, _schema, _ctx, errors, instancePath, dataCtx, schemaPath) {
    // YahooFinance type
    if (typeof input === "object" && input !== null &&
        Object.keys(input).length === 0) {
        set(dataCtx, null, instancePath);
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
