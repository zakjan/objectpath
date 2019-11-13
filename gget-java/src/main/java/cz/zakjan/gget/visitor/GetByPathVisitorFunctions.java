package cz.zakjan.gget.visitor;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

public class GetByPathVisitorFunctions {
    private static Map<String, Function<List<Object>, Object>> nameToFunction = new HashMap<String, Function<List<Object>, Object>>() {{
        put("join", GetByPathVisitorFunctions::joinFunction);
        put("split", GetByPathVisitorFunctions::splitFunction);
        put("sum", GetByPathVisitorFunctions::sumFunction);
    }};

    public static Object callFunction(String name, List<Object> args) {
        Function<List<Object>, Object> func = nameToFunction.get(name);
        if (func == null) {
            return null;
        }

        return func.apply(args);
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
}