package com.sz.dev.dto.shortRead;

import lombok.*;


@Getter
@Setter
@Value
@Builder
@RequiredArgsConstructor
@NoArgsConstructor(force = true)
public class JsonShortReadDto {
    String title;
    String content;
    String urlAlias;
}
