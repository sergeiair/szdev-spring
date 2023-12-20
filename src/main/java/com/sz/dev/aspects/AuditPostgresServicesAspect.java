package com.sz.dev.aspects;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

import java.util.concurrent.TimeUnit;

@Slf4j
@Aspect
@Component
public class AuditPostgresServicesAspect {

    @Around("execution(* com.sz.dev.db.sql.services.*.*(..))")
    public Object aroundServiceMethods(ProceedingJoinPoint joinPoint) throws Throwable {
        log.info("Audit method: " + joinPoint.getSignature().getDeclaringTypeName() + "."+ joinPoint.getSignature().getName());

        var startTime = System.nanoTime();
        Object result = joinPoint.proceed();
        var duration = (System.nanoTime() - startTime);

        log.info("Time execution: " + TimeUnit.MILLISECONDS.convert(duration, TimeUnit.NANOSECONDS) + "ms");

        return result;
    }
}
