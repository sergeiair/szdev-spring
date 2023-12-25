package com.sz.dev.dto;

import lombok.*;

import java.time.LocalDate;

@Value
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(force = true)
public class TagDto {
    int id;
    String content;
}
