package com.sz.dev.dto.playground;

import lombok.*;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor(force = true)
@Builder
public class MeasureResultDto {
    long time;
    long memory;
}
