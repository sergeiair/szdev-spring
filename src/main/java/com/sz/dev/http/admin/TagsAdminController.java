package com.sz.dev.http.admin;


import com.sz.dev.db.sql.services.TagsService;
import com.sz.dev.dto.ListResponseDto;
import com.sz.dev.dto.ObjectResponseDto;
import com.sz.dev.dto.TagDto;
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
@RequestMapping("/api/v1/not4u/tags")
public class TagsAdminController {

    private final TagsService tagsService;

    @GetMapping()
    public ResponseEntity<ListResponseDto> findAll(@RequestHeader("Authorization") String bearerToken) {
        List<TagDto> tagsItemsList = tagsService.findAll();

        return ResponseEntity.ok(
            new ListResponseDto<TagDto>(tagsItemsList, true, "")
        );
    }

    @PostMapping()
    public ResponseEntity<ObjectResponseDto<TagDto>> create(@RequestBody TagDto TagDto) {
        var item = tagsService.create(TagDto);

        return ResponseEntity.status(HttpStatus.CREATED).body(
                new ObjectResponseDto<TagDto>(item, true, "")
        );
    }

    @PutMapping()
    public ResponseEntity<ObjectResponseDto<TagDto>> update(@RequestBody TagDto TagDto) {
        var item = tagsService.update(TagDto);

        return ResponseEntity.ok(
                new ObjectResponseDto<TagDto>(item, true, "")
        );
    }

}
