package com.sz.dev.http.admin;


import com.sz.dev.db.sql.services.ShortReadService;
import com.sz.dev.dto.ListResponseDto;
import com.sz.dev.dto.ObjectResponseDto;
import com.sz.dev.dto.shortRead.ShortReadDto;
import com.sz.dev.dto.shortRead.ShortReadWriteDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import java.util.List;

@RestController
@RequiredArgsConstructor
@EnableWebMvc
@RequestMapping("/api/v1/not4u/short-reads")
public class ShortReadsAdminController {

    private final ShortReadService shortReadService;

    @GetMapping()
    public ResponseEntity<ListResponseDto> findAll(@RequestHeader("Authorization") String bearerToken) {
        List<ShortReadDto> shortReadItemsList = shortReadService.findAllWithTags();

        return ResponseEntity.ok(
            new ListResponseDto<ShortReadDto>(shortReadItemsList, true, "")
        );
    }

    @PostMapping()
    public ResponseEntity<ObjectResponseDto<ShortReadDto>> create(@RequestBody ShortReadWriteDto shortReadDto) {
        var item = shortReadService.create(shortReadDto);

        return ResponseEntity.status(HttpStatus.CREATED).body(
                new ObjectResponseDto<ShortReadDto>(item, true, "")
        );
    }

    @PutMapping()
    public ResponseEntity<ObjectResponseDto<ShortReadDto>> update(@RequestBody ShortReadWriteDto shortReadDto) {
        var item = shortReadService.update(shortReadDto);

        return ResponseEntity.ok(
                new ObjectResponseDto<ShortReadDto>(item, true, "")
        );
    }

}
