package com.sz.dev.http.controllers;

import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.model.*;
import com.sz.dev.db.dynamo.entity.Article;
import com.sz.dev.db.sql.services.ShortReadService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@Controller
@RestController
@RequiredArgsConstructor
public class TestController {

  private final ShortReadService shortReadService;

  Logger logger = LoggerFactory.getLogger(TestController.class);

  @Autowired
  private AmazonDynamoDB client;

  @Autowired
  private DynamoDBMapper dynamoDBMapper;

  @GetMapping("/health")
  public String health() {
    Article item = new Article("Test 1");

    ListTablesResult listTablesResult = client.listTables();

    CreateTableRequest tableRequest = dynamoDBMapper
            .generateCreateTableRequest(Article.class);

    tableRequest.setProvisionedThroughput(
            new ProvisionedThroughput(1L, 1L));


    dynamoDBMapper.save(item);
    logger.error(item.getId());

    return "Hello " + listTablesResult.getTableNames();
  }

  @GetMapping("/reads")
  public String shortReads() {
    long readsNumber = shortReadService.findAll().size();

    return "Hello " + readsNumber;
  }

  @GetMapping("/short-reads")
  public String shortReadsAlt() {
    return "redirect:/reads";
  }

}
