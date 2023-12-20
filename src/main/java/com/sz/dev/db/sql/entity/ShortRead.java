package com.sz.dev.db.sql.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "szdev_short_reads")
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

    @Column(unique = true, nullable = false, name = "url_alias")
    private String urlAlias;

    /*@Builder.Default
    @ElementCollection
    @CollectionTable(name = "short_read_locales", joinColumns = @JoinColumn(name = "short_read_id"))
    @MapKeyColumn(name = "lang")
    @Column(name = "description")
    private Map<String, String> locales = new HashMap<>();*/
}

