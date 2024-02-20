package com.sz.dev.db.sql.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "szdev_short_reads")
public class ShortReadEntity extends AuditingEntity<Integer> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(unique = false, nullable = false)
    private Boolean published;

    @Column(unique = true, nullable = false)
    private String title;

    @Column(unique = true, nullable = false)
    private String preview;

    @Column(unique = true, nullable = false)
    private String content;

    @Column(unique = true, nullable = false, name = "url_alias")
    private String urlAlias;

    @OneToMany
    @CollectionTable(
            name = "short_read_tags",
            joinColumns = @JoinColumn(name = "short_read_id")
    )
    @MapKeyColumn(name = "tags_id")
    @Column(name = "description")
    private List<TagEntity> tags;
}

