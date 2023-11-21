package com.sz.dev.http;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

@GetMapping("/health")
public String health() {
  return "Hello & Welcome to CloudKatha !!!";
}
}
