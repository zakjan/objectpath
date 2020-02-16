package cz.zakjan.gget;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.MethodSource;

import java.io.IOException;
import java.io.UncheckedIOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.*;
import java.util.stream.Collectors;

import static cz.zakjan.gget.GetByPath.getByPath;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class GetByPathTest {
    private static final String TEST_COMMON_PATH = "../test";

    public static List<Object[]> testCases() {
        ObjectMapper objectMapper = new ObjectMapper();

        try {
            return Files.list(Paths.get(TEST_COMMON_PATH)).sorted().flatMap(file -> {
                try {
                    String json = new String(Files.readAllBytes(file));
                    Map<String, Object> fixture = objectMapper.readValue(json, new TypeReference<Map<String, Object>>(){});
                    return ((List<List<Object>>)fixture.get("testCases")).stream().map(testCase ->
                            new Object[] { testCase.get(0), fixture.get("data"), testCase.get(1) }
                    );
                } catch (IOException e) {
                    throw new UncheckedIOException(e);
                }
            }).collect(Collectors.toList());
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }

    @DisplayName("getByPath")
    @ParameterizedTest(name = "path = \"{0}\"")
    @MethodSource("testCases")
    public void testGetByPath(String path, Object data, Object expected) {
        Object result = getByPath(data, path);
        assertEquals(expected, result);
    }
}
