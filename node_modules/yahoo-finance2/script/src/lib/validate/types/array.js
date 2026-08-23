"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.array = void 0;
const index_js_1 = __importDefault(require("../index.js"));
const array = function array(input, schema, ctx, errors, instancePath, _dataCtx, schemaPath) {
    if (!Array.isArray(input)) {
        errors.push({ instancePath, message: "Expected an array", data: input });
        return false;
    }
    if (schema.items) {
        const dataCtx = { parentData: input, parentDataProperty: 0 };
        for (const [idx, value] of input.entries()) {
            dataCtx.parentDataProperty = idx;
            (0, index_js_1.default)(value, schema.items, ctx, errors, instancePath + "/" + idx, dataCtx, schemaPath + "/items");
        }
    }
    return true;
};
exports.array = array;
