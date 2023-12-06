package com.sz.dev;

import com.sz.dev.config.DatabaseProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ConfigurationPropertiesScan
@EntityScan("com.sz.dev")
@EnableJpaRepositories("com.sz.dev.db.sql")
public class SzDevApplication {

	public static void main(String[] args) {
		SpringApplication.run(SzDevApplication.class, args);
	}

}
