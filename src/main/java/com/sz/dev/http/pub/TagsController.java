package com.sz.dev.http.pub;


import com.sz.dev.db.sql.services.TagsService;
import com.sz.dev.dto.ListResponseDto;
import com.sz.dev.dto.TagDto;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import java.util.List;

@RestController
@RequiredArgsConstructor
@EnableWebMvc
@RequestMapping("/api/v1/tags")
public class TagsController {

    private final TagsService tagsService;

    @GetMapping()
    public ResponseEntity<ListResponseDto> findAll() {
        List<TagDto> tagsItemsList = tagsService.findAllPublished();

        return ResponseEntity.ok(
            new ListResponseDto<TagDto>(tagsItemsList, true, "")
        );
    }

}
