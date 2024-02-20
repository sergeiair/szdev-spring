package com.sz.dev.dto.playground.utls;

import com.sz.dev.dto.playground.MeasureResultDto;

import java.util.Date;

public class MeasureUtil {

    private Date startDateTime;
    private long startMemory;

    public void startMeasure() {
        startMemMeasure();
        startTimeMeasure();
    }

    public MeasureResultDto endMeasure() {
        long timeResult = endTimeMeasure();
        long memResult = endMemMeasure();

        return MeasureResultDto.builder()
                .memory(memResult)
                .time(timeResult)
                .build();
    }

    public void startTimeMeasure() {
        startDateTime = new Date();
    }

    public void startMemMeasure() {
        startMemory = Runtime.getRuntime().totalMemory() - Runtime.getRuntime().freeMemory();
    }

    public long endMemMeasure() {
        long memDiff = Runtime.getRuntime().totalMemory() - Runtime.getRuntime().freeMemory();

        return (startMemory - memDiff);
    }

    public long endTimeMeasure() {
        Date endDate = new Date();

        return endDate.getTime() - startDateTime.getTime();
    }
}
