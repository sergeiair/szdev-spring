package com.sz.dev.db.sql.repository;

import com.sz.dev.db.sql.entity.ShortRead;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShortReadRepository extends JpaRepository<ShortRead, Integer> {


}
