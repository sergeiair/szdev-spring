package com.sz.dev.db.sql.repository;

import com.sz.dev.db.sql.entity.TagEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface TagsRepository extends JpaRepository<TagEntity, Integer> {

}
