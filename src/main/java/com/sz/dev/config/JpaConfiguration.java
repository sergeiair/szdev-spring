package com.sz.dev.config;

import com.sz.dev.conditions.JpaCondition;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Conditional;
import org.springframework.context.annotation.Configuration;

import javax.annotation.PostConstruct;

@Slf4j
@Conditional(JpaCondition.class)
@Configuration
public class JpaConfiguration {

    @PostConstruct
    void init() {
        log.info("Jpa configuration is enabled");
    }
}
