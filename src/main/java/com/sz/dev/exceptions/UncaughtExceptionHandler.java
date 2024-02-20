package com.sz.dev.exceptions;

import com.rollbar.notifier.Rollbar;
import com.rollbar.notifier.config.Config;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

import static com.rollbar.notifier.config.ConfigBuilder.withAccessToken;


@ControllerAdvice
public class UncaughtExceptionHandler {

    private Rollbar rollbar;

    UncaughtExceptionHandler() {
        Config config = withAccessToken("3fc492a91d564e7b95835f5d3bf19d88")
                .environment("production")
                .codeVersion("1.0.0")
                .build();

        this.rollbar = Rollbar.init(config);
    }

    @ExceptionHandler(Exception.class)
    public void handleAll(Exception e) {
        rollbar.error(e, e.getMessage());
    }
}
