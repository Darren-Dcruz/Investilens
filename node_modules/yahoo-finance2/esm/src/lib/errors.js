// Yahoo's servers returned an HTTP 400 for this request.
export class BadRequestError extends Error {
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
// Yahoo's servers returned a 'not-ok' status for this request.
// https://developer.mozilla.org/en-US/docs/Web/API/Response/ok
export class HTTPError extends Error {
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
// A YahooFinance method was called with invalid options.
export class InvalidOptionsError extends Error {
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
// An internal method yahooFinanceFetch() was called without this._env set.
export class NoEnvironmentError extends Error {
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
export class FailedYahooValidationError extends Error {
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
const errors = {
    BadRequestError,
    HTTPError,
    InvalidOptionsError,
    NoEnvironmentError,
    FailedYahooValidationError,
};
export default errors;
