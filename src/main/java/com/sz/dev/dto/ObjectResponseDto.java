package com.sz.dev.dto;

import jakarta.annotation.Nullable;
import lombok.Builder;
import lombok.RequiredArgsConstructor;

import java.util.List;

@RequiredArgsConstructor
public class ObjectResponseDto<T> {
    public final T data;
    public final Boolean status;
    public final @Nullable String error;
}
