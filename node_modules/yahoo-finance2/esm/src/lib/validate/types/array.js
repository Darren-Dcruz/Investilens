import validateAndCoerce from "../index.js";
export const array = function array(input, schema, ctx, errors, instancePath, _dataCtx, schemaPath) {
    if (!Array.isArray(input)) {
        errors.push({ instancePath, message: "Expected an array", data: input });
        return false;
    }
    if (schema.items) {
        const dataCtx = { parentData: input, parentDataProperty: 0 };
        for (const [idx, value] of input.entries()) {
            dataCtx.parentDataProperty = idx;
            validateAndCoerce(value, schema.items, ctx, errors, instancePath + "/" + idx, dataCtx, schemaPath + "/items");
        }
    }
    return true;
};
