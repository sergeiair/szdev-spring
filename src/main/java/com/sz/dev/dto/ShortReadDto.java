package com.sz.dev.dto;

import lombok.*;
import lombok.experimental.FieldNameConstants;
import org.hibernate.envers.Audited;
import org.hibernate.envers.RelationTargetAuditMode;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;

@Value
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(force = true)
public class ShortReadDto {
    int id;

    String title;
    String preview;
    String content;
    String urlAlias;

    LocalDate created;
    LocalDate modified;

}
