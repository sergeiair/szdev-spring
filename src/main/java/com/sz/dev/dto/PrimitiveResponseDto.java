package com.sz.dev.dto;

import jakarta.annotation.Nullable;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class PrimitiveResponseDto {
    public final Object data;
    public final @Nullable String error;
}
