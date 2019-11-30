package com.example.csi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class CsiApplication {

    public static void main(String[] args) {
        SpringApplication.run(CsiApplication.class, args);
    }

}
