export class GetByPathVisitorFunctions {
    private static nameToFunction = new Map([
        ["join", GetByPathVisitorFunctions.joinFunction],
        ["split", GetByPathVisitorFunctions.splitFunction],
        ["sum", GetByPathVisitorFunctions.sumFunction],
        ["timestampToIsoString", GetByPathVisitorFunctions.timestampToIsoStringFunction],
        ["isoStringToTimestamp", GetByPathVisitorFunctions.isoStringToTimestampFunction],
    ]);

    public static callFunction(name: string, args: unknown[]): unknown {
        const func = GetByPathVisitorFunctions.nameToFunction.get(name);
        /* istanbul ignore if */
        if (!func) {
            return null;
        }

        return func(args);
    }

    private static joinFunction(args: unknown[]): unknown {
        /* istanbul ignore if */
        if (args.length !== 2) {
            return null;
        }

        const values = args[0];
        const delimiter = args[1];
        /* istanbul ignore if */
        if (!(Array.isArray(values) && typeof delimiter === "string")) {
            return null;
        }

        const filteredValues = values.filter(x => typeof x === "string");
        /* istanbul ignore if */
        if (filteredValues.length === 0) {
            return null;
        }

        const result = filteredValues.join(delimiter)
        return result;
    }

    private static splitFunction(args: unknown[]): unknown {
        /* istanbul ignore if */
        if (args.length !== 2) {
            return null;
        }

        const value = args[0];
        const delimiter = args[1];
        /* istanbul ignore if */
        if (!(typeof value === "string" && typeof delimiter === "string")) {
            return null;
        }

        const result = value.split(delimiter);
        return result;
    }

    private static sumFunction(args: unknown[]): unknown {
        /* istanbul ignore if */
        if (args.length !== 1) {
            return null;
        }

        const values = args[0];
        /* istanbul ignore if */
        if (!Array.isArray(values)) {
            return null;
        }

        const filteredValues = values.filter(x => typeof x === "number");
        /* istanbul ignore if */
        if (filteredValues.length === 0) {
            return null;
        }

        const result = filteredValues.reduce((sum, x) => sum + x, 0);
        return result;
    }

    private static timestampToIsoStringFunction(args: unknown[]): unknown {
        /* istanbul ignore if */
        if (args.length !== 1) {
            return null;
        }

        const value = args[0];
        /* istanbul ignore if */
        if (typeof value !== "number") {
            return null;
        }

        return new Date(value).toISOString();
    }

    private static isoStringToTimestampFunction(args: unknown[]): unknown {
        /* istanbul ignore if */
        if (args.length !== 1) {
            return null;
        }

        const value = args[0];
        /* istanbul ignore if */
        if (typeof value !== "string") {
            return null;
        }

        return Date.parse(value).valueOf();
    }
}