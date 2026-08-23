"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultOptions = void 0;
exports.validateOptions = validateOptions;
exports.defaultOptions = {
    // deno-lint-ignore no-explicit-any
    info: (...args) => console.log(...args),
    // deno-lint-ignore no-explicit-any
    warn: (...args) => console.warn(...args),
    // deno-lint-ignore no-explicit-any
    error: (...args) => console.error(...args),
    // deno-lint-ignore no-explicit-any
    dir: (...args) => console.dir(...args),
    // deno-lint-ignore no-explicit-any
    debug: (..._args) => {
        // XXX TODO ability to easily toggle this.
        // console.log(...args)
    },
};
function validateOptions(logger) {
    if (typeof logger !== "object" || logger === null) {
        throw new Error("logger must be an object");
    }
    for (const method of ["info", "warn", "error", "debug", "dir"]) {
        if (!(method in logger)) {
            throw new Error(`logger.${method} is required`);
        }
        if (typeof logger[method] !== "function") {
            throw new Error(`logger.${method} must be a function`);
        }
    }
}
