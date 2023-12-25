package com.sz.dev.dto.shortRead;

import com.sz.dev.db.sql.entity.TagEntity;
import lombok.*;

import java.time.LocalDate;
import java.util.List;


@Getter
@Setter
@Value
@Builder
@RequiredArgsConstructor
@NoArgsConstructor(force = true)
public class ShortReadDto  {
    int id;
    Boolean published;
    String title;
    String preview;
    String content;
    String urlAlias;

    LocalDate created;
    LocalDate modified;

    List<TagEntity> tags;
}
