package com.sz.dev.db.sql.pool;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

@Slf4j
@RequiredArgsConstructor
@Component("pool1")
public class ConnectionPool {

    @Value("${db.username}")
    private String username;
    @Value("${db.pool.size}")
    private Integer poolSize;

    @PostConstruct
    private void init() {
        log.info("Init connection pool 1");
    }
    @PreDestroy
    private void destroy() {
        log.info("Clean connection pool");
    }
}
