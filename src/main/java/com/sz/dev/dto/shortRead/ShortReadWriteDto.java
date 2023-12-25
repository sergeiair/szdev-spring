package com.sz.dev.dto.shortRead;

import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Getter
@Value
@AllArgsConstructor
@NoArgsConstructor(force = true)
public class ShortReadWriteDto {
    int id;
    Boolean published;
    String title;
    String preview;
    String content;
    String urlAlias;

    LocalDate created;
    LocalDate modified;

    List<Integer> tags;
}
