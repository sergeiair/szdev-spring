package com.sz.dev.db.sql.entity;

import com.sz.dev.bpp.audit.Auditing;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "short_read")
//@Audited(targetAuditMode = RelationTargetAuditMode.NOT_AUDITED)
public class ShortRead extends AuditingEntity<Integer> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(unique = true, nullable = false)
    private String title;

    @Column(unique = true, nullable = false)
    private String preview;

    @Column(unique = true, nullable = false)
    private String content;

    @Builder.Default
    @ElementCollection
    @CollectionTable(name = "short_read_locales", joinColumns = @JoinColumn(name = "short_read_id"))
    @MapKeyColumn(name = "lang")
    @Column(name = "description")
    private Map<String, String> locales = new HashMap<>();
}

