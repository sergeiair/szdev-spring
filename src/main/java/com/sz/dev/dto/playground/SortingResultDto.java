package com.sz.dev.dto.playground;

import lombok.*;


@Getter
@Setter
@Value
@Builder
@RequiredArgsConstructor
@NoArgsConstructor(force = true)
public class SortingResultDto {
    String name;
    MeasureResultDto result;
    int[] array;
}
