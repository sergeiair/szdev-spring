package com.sz.dev.jsonCache;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.concurrent.CompletableFuture;

@Service
@Slf4j
public class JsonCacheService<T> {

    ObjectMapper objectMapper = new ObjectMapper();

    @Value("${jsonCache.path}")
    private String baseFilePath;

    public void write(List<T> items, String fileName) {
        CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {
            try {
                objectMapper.writeValue(new File(System.getProperty("user.dir") + "/" + baseFilePath + fileName + ".json"), items);
            } catch (Exception e) {
                log.error(e.getLocalizedMessage());
            }

            return "OK";
        });
    }

}
