package com.sz.dev.dto;

import lombok.Value;

import java.time.LocalDate;

@Value
public class ShortReadDto {
    int id;
    String title;
    String preview;
    String content;
    LocalDate created;
    LocalDate modified;


}
