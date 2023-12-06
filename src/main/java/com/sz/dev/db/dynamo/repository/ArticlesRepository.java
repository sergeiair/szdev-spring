package com.sz.dev.db.dynamo.repository;

import com.sz.dev.db.dynamo.entity.Article;
import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@EnableScan
@Repository
public interface ArticlesRepository extends CrudRepository<Article, String> {
  Optional<Article> findArticleByTitle(String title);
  Optional<Article> findArticleById(String id);
}
