// deepmerge.ts (Deno-lint friendly)
function isPlainObject(value) {
    if (value === null || typeof value !== "object")
        return false;
    const proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
}
function isUnsafeKey(key) {
    return key === "__proto__" || key === "constructor" || key === "prototype";
}
function mergeTwo(target, source) {
    const out = { ...target };
    for (const key of Reflect.ownKeys(source)) {
        if (isUnsafeKey(key))
            continue;
        const srcVal = source[key];
        const tgtVal = out[key];
        if (isPlainObject(tgtVal) && isPlainObject(srcVal)) {
            out[key] = mergeTwo(tgtVal, srcVal);
        }
        else {
            // arrays + class instances + dates + maps + everything non-plain: overwrite
            out[key] = srcVal;
        }
    }
    return out;
}
/**
 * Deep merge any number of objects.
 * - Deep merges *plain objects* only.
 * - Overwrites arrays and class instances.
 * - Later args win.
 */
export function deepMerge(...objects) {
    let result = Object.create(null);
    for (const obj of objects) {
        if (!isPlainObject(obj)) {
            // If you pass a non-plain object at the top-level, last wins.
            result = obj;
            continue;
        }
        result = mergeTwo(result, obj);
    }
    return result;
}
