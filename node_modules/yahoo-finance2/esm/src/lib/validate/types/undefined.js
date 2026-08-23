export const _undefined = function _undefined(input, schema, _ctx, errors, instancePath, _dataCtx, schemaPath) {
    if (input !== undefined) {
        errors.push({
            instancePath,
            schemaPath,
            message: "Expected undefined",
            data: input,
            schema,
        });
        return false;
    }
    return true;
};
