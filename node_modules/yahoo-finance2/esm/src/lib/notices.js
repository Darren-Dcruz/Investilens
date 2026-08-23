const notices = {
    yahooSurvey: {
        id: "yahooSurvey",
        text: "Please consider completing the survey at https://bit.ly/yahoo-finance-api-feedback " +
            "if you haven't already; for more info see " +
            "https://github.com/gadicc/yahoo-finance2/issues/764#issuecomment-2056623851.",
        onceOnly: true,
    },
    ripHistorical: {
        id: "ripHistorical",
        text: "[Deprecated] historical() relies on an API that Yahoo have removed.  We'll " +
            "map this request to chart() for convenience, but, please consider using " +
            "chart() directly instead; for more info see " +
            "https://github.com/gadicc/yahoo-finance2/issues/795.",
        level: "warn",
        onceOnly: true,
    },
};
export default class Notices {
    constructor(yahooFinance) {
        Object.defineProperty(this, "_yahooFinance", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_suppressed", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._yahooFinance = yahooFinance;
        if (yahooFinance._opts.suppressNotices) {
            this._suppressed = new Set(yahooFinance._opts.suppressNotices);
        }
        else {
            this._suppressed = new Set();
        }
    }
    show(id) {
        const n = notices[id];
        if (!n)
            throw new Error(`Unknown notice id: ${id}`);
        if (this._suppressed.has(id))
            return;
        if (n.onceOnly)
            this._suppressed.add(id);
        const text = n.text +
            (n.onceOnly ? "  This will only be shown once, but you" : "You") +
            " can suppress this message in future with `new YahooFinance({ suppressNotices: ['" +
            id +
            "'] })`.";
        const level = ("level" in n && n.level) || "info";
        this._yahooFinance._opts.logger[level](text);
    }
    suppress(noticeIds) {
        noticeIds.forEach((id) => {
            const n = notices[id];
            if (!n) {
                this._yahooFinance._opts.logger.error(`Unknown notice id: ${id}`);
            }
            this._suppressed.add(id);
        });
    }
}
