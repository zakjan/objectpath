package cz.zakjan.objectpath;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.*;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.MethodSource;

import java.io.IOException;
import java.io.UncheckedIOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.*;
import java.util.stream.Collectors;

import static cz.zakjan.objectpath.GetByPath.getByPath;
import static org.junit.jupiter.api.Assertions.assertEquals;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class GetByPathTest {
    private static final String TEST_COMMON_PATH = "test";

    public static List<Object[]> testCases() {
        ObjectMapper objectMapper = new ObjectMapper();

        try {
            return Files.list(Paths.get(TEST_COMMON_PATH)).sorted().flatMap(file -> {
                try {
                    String json = new String(Files.readAllBytes(file));
                    Map<String, Object> fixture = objectMapper.readValue(json, new TypeReference<Map<String, Object>>(){});
                    return ((List<List<Object>>)fixture.get("testCases")).stream().map(testCase -> {
                        Object path = testCase.get(0);
                        Object data = fixture.get("data");
                        Object expected = testCase.get(1);
                        return new Object[] { path, data, expected };
                    });
                } catch (IOException e) {
                    throw new UncheckedIOException(e);
                }
            }).collect(Collectors.toList());
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }

    @Test
    @DisplayName("simple")
    @Order(0)
    public void simple() {
        Object data = new HashMap<String, List<String>>() {{
            put("A", new ArrayList<String>() {{
                add("B");
            }});
        }};
        String path = "A[0]";
        Object expected = "B";
        Object result = getByPath(data, path);
        assertEquals(expected, result);
    }

    @ParameterizedTest(name = "path = \"{0}\"")
    @DisplayName("common")
    @MethodSource("testCases")
    public void common(String path, Object data, Object expected) {
        Object result = getByPath(data, path);
        assertEquals(expected, result);
    }
}
