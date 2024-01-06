package com.sz.dev.db.sql.repository;

import com.sz.dev.db.sql.entity.TagEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface TagsRepository extends JpaRepository<TagEntity, Integer> {
    @Query("select tag from TagEntity tag WHERE tag.published = true")
    List<TagEntity> findAllPublished();
}
