package com.sz.dev.http.admin;


import com.sz.dev.db.sql.services.ShortReadService;
import com.sz.dev.dto.PrimitiveResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Controller
@RestController
@RequiredArgsConstructor
@EnableWebMvc
public class ShortReadsAdminController {

    private final ShortReadService shortReadService;

    @GetMapping(value = "/forme/short-reads")
    public ResponseEntity<PrimitiveResponseDto> findAll() {
        long readsNumber = shortReadService.findAll().size();

        return ResponseEntity.ok(
            new PrimitiveResponseDto(readsNumber, null)
        );
    }

}
