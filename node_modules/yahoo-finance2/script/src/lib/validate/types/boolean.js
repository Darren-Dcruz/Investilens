"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boolean = void 0;
const boolean = function boolean(input, _schema, _ctx, errors, instancePath, _dataCtx, schemaPath) {
    if (typeof input !== "boolean") {
        errors.push({
            instancePath,
            schemaPath,
            message: "Expected a boolean",
            data: input,
        });
        return false;
    }
    return true;
};
exports.boolean = boolean;
