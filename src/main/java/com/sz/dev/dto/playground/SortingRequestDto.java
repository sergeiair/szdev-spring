package com.sz.dev.dto.playground;

import lombok.*;

@Value
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(force = true)
public class SortingRequestDto {
    String name;
    int[] array;
}
