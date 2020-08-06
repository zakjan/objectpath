package cz.zakjan.objectpath.visitor;

import java.time.Instant;
import java.time.OffsetDateTime;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

public class GetByPathVisitorFunctions {
    private static Map<String, Function<List<Object>, Object>> nameToFunction = new HashMap<String, Function<List<Object>, Object>>() {{
        put("toString", GetByPathVisitorFunctions::toStringFunction);
        put("toNumber", GetByPathVisitorFunctions::toNumberFunction);
        put("join", GetByPathVisitorFunctions::joinFunction);
        put("split", GetByPathVisitorFunctions::splitFunction);
        put("sum", GetByPathVisitorFunctions::sumFunction);
        put("dateTimestampToIsoString", GetByPathVisitorFunctions::dateTimestampToIsoStringFunction);
        put("dateIsoStringToTimestamp", GetByPathVisitorFunctions::dateIsoStringToTimestampFunction);
    }};

    public static Object callFunction(String name, List<Object> args) {
        Function<List<Object>, Object> func = nameToFunction.get(name);
        if (func == null) {
            return null;
        }

        return func.apply(args);
    }

    public static Object toStringFunction(List<Object> args) {
        if (args.size() != 1) {
            return null;
        }

        Object value = args.get(0);
        String result = String.valueOf(value);
        return result;
    }

    private static Object toNumberFunction(List<Object> args) {
        if (args.size() != 1) {
            return null;
        }

        Object value = args.get(0);
        Object result;
        try {
            result = Integer.parseInt(String.valueOf(value));
        } catch (NumberFormatException e) {
            result = Long.parseLong(String.valueOf(value));
        }
        return result;
    }

    private static Object joinFunction(List<Object> args) {
        if (args.size() != 2) {
            return null;
        }

        Object values = args.get(0);
        Object delimiter = args.get(1);
        if (!(values instanceof List && delimiter instanceof String)) {
            return null;
        }

        List<String> filteredValues = ((List<Object>)values).stream().filter(x -> x instanceof String).map(x -> (String)x).collect(Collectors.toList());
        if (filteredValues.size() == 0) {
            return null;
        }

        String result = String.join((String)delimiter, filteredValues);
        return result;
    }

    private static Object splitFunction(List<Object> args) {
        if (args.size() != 2) {
            return null;
        }

        Object value = args.get(0);
        Object delimiter = args.get(1);
        if (!(value instanceof String && delimiter instanceof String)) {
            return null;
        }

        List<String> result = Arrays.asList(((String)value).split((String)delimiter));
        return result;
    }

    private static Object sumFunction(List<Object> args) {
        if (args.size() != 1) {
            return null;
        }

        Object values = args.get(0);
        if (!(values instanceof List)) {
            return null;
        }

        List<Integer> filteredValues = ((List<Object>)values).stream().filter(x -> x instanceof Integer).map(x -> (Integer)x).collect(Collectors.toList());
        if (filteredValues.size() == 0) {
            return null;
        }

        Integer result = filteredValues.stream().reduce(0, (sum, x) -> sum + x);
        return result;
    }

    private static Object dateTimestampToIsoStringFunction(List<Object> args) {
        if (args.size() != 1) {
            return null;
        }

        Object value = args.get(0);
        if (!(value instanceof Long)) {
            return null;
        }

        OffsetDateTime dateTime = OffsetDateTime.ofInstant(Instant.ofEpochMilli((Long)value), ZoneOffset.UTC);
        return dateTime.format(DateTimeFormatter.ofPattern("YYYY-MM-DD'T'HH:mm:ss.SSSX"));
    }

    private static Object dateIsoStringToTimestampFunction(List<Object> args) {
        if (args.size() != 1) {
            return null;
        }

        Object value = args.get(0);
        if (!(value instanceof String)) {
            return null;
        }

        try {
            OffsetDateTime dateTime = OffsetDateTime.parse((String)value, DateTimeFormatter.ISO_OFFSET_DATE_TIME);
            return dateTime.toInstant().toEpochMilli();
        } catch (DateTimeParseException e) {
            return null;
        }
    }
}