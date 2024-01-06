package com.sz.dev.dto;

import lombok.*;

@Value
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(force = true)
public class TagDto {
    int id;
    String content;
    Boolean published;
}
