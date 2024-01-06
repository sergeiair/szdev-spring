package com.sz.dev.db.sql.repository;

import com.sz.dev.db.sql.entity.ShortReadEntity;
import jakarta.persistence.OneToOne;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface ShortReadRepository extends JpaRepository<ShortReadEntity, Integer> {
    @Query("select sr from ShortReadEntity sr " +
            " left join fetch sr.tags srt")
    List<ShortReadEntity> findAllWithTags();

    @Query("select sr from ShortReadEntity sr order by sr.createdAt")
    List<ShortReadEntity> findAllAsJsonItems();

    @Query("select sr from ShortReadEntity sr " +
            " left join fetch sr.tags srt" +
            " WHERE lower(srt.content) = lower(:tag) AND sr.published = true ")
    List<ShortReadEntity> findAllByTag(@Param("tag") String tag);

    @Query("select sr from ShortReadEntity sr " +
            "left join fetch sr.tags srt " +
            "WHERE sr.urlAlias = :urlAlias AND sr.published = true")
    Optional<ShortReadEntity> findByUrlAlias(@Param("urlAlias") String urlAlias);
}
