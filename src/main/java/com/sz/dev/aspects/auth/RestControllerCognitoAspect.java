package com.sz.dev.aspects.auth;

import com.amazonaws.util.StringUtils;
import com.sz.dev.auth.cognito.CognitoAuthService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

@Slf4j
@Aspect
@Component
@AllArgsConstructor
public class RestControllerCognitoAspect {

    private final CognitoAuthService cognitoAuthService;

    @Autowired
    private HttpServletRequest httpServletRequest;

    @Around("execution(* com.sz.dev.http.admin.*.*(..))")
    public Object aroundAdminControllerMethods(ProceedingJoinPoint joinPoint) throws Throwable {
        String header = httpServletRequest.getHeader("Authorization");

        if (!StringUtils.isNullOrEmpty(header)) {
            boolean isValid = cognitoAuthService.validate(header.substring(7));

            if (isValid) {
                return joinPoint.proceed();
            } else {
                return new ResponseEntity<String>("Unauthorized", HttpStatus.UNAUTHORIZED);

            }
        }

        return new ResponseEntity<String>("Unauthorized", HttpStatus.UNAUTHORIZED);

    }
}
