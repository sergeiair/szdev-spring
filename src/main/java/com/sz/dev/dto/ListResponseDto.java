package com.sz.dev.dto;

import jakarta.annotation.Nullable;
import lombok.RequiredArgsConstructor;

import java.util.List;

@RequiredArgsConstructor
public class ListResponseDto<T> {
    public final List<T> data;
    public final Boolean status;
    public final @Nullable String error;
}
