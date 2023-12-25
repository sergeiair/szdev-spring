package com.sz.dev.db.sql.repository;

import com.sz.dev.db.sql.entity.ShortReadEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface ShortReadRepository extends JpaRepository<ShortReadEntity, Integer> {
    @Query("select sr from ShortReadEntity sr " +
            " left join fetch sr.tags srt")
    List<ShortReadEntity> findAllWithTags();
}
