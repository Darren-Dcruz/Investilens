"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FailedYahooValidationError = exports.NoEnvironmentError = exports.InvalidOptionsError = exports.HTTPError = exports.BadRequestError = void 0;
// Yahoo's servers returned an HTTP 400 for this request.
class BadRequestError extends Error {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "BadRequestError"
        });
    }
}
exports.BadRequestError = BadRequestError;
// Yahoo's servers returned a 'not-ok' status for this request.
// https://developer.mozilla.org/en-US/docs/Web/API/Response/ok
class HTTPError extends Error {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "HTTPError"
        });
    }
}
exports.HTTPError = HTTPError;
// A YahooFinance method was called with invalid options.
class InvalidOptionsError extends Error {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "InvalidOptionsError"
        });
    }
}
exports.InvalidOptionsError = InvalidOptionsError;
// An internal method yahooFinanceFetch() was called without this._env set.
class NoEnvironmentError extends Error {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "NoEnvironmentError"
        });
    }
}
exports.NoEnvironmentError = NoEnvironmentError;
class FailedYahooValidationError extends Error {
    constructor(message, 
    // deno-lint-ignore no-explicit-any
    { result, errors }) {
        super(message);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "FailedYahooValidationError"
        });
        // deno-lint-ignore no-explicit-any
        Object.defineProperty(this, "result", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "errors", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.result = result;
        this.errors = errors;
    }
}
exports.FailedYahooValidationError = FailedYahooValidationError;
const errors = {
    BadRequestError,
    HTTPError,
    InvalidOptionsError,
    NoEnvironmentError,
    FailedYahooValidationError,
};
exports.default = errors;
