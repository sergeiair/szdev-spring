package com.sz.dev.http.pub;


import com.sz.dev.db.sql.services.ShortReadService;
import com.sz.dev.dto.ListResponseDto;
import com.sz.dev.dto.ObjectResponseDto;
import com.sz.dev.dto.shortRead.ShortReadDto;
import com.sz.dev.helpers.HttpRequestHelpers;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import java.util.List;
import java.util.Optional;

@Slf4j
@RestController
@RequiredArgsConstructor
@EnableWebMvc
@RequestMapping("/api/v1/articles")
public class ShortReadController {

    private final ShortReadService shortReadService;

    @GetMapping("/by-tag/{tagName}")
    public ResponseEntity<ListResponseDto<ShortReadDto>> findArticlesByTag(
            @PathVariable("tagName") String tagName, HttpServletRequest request
    ) {
        List<ShortReadDto> shortReadItemsList = shortReadService
                .findAllByTag(HttpRequestHelpers.cleanPathVariable(tagName));

        if (shortReadItemsList.isEmpty()) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }

        return ResponseEntity.ok(
                new ListResponseDto<ShortReadDto>(shortReadItemsList, true, "")
        );
    }

    @GetMapping("/search/{urlAlias}")
    public ResponseEntity<ObjectResponseDto<ShortReadDto>> findArticleByUrlAlias(
            @PathVariable("urlAlias") String tagName, HttpServletRequest request
    ) {
        Optional<ShortReadDto> item = shortReadService
                .findArticleByUrlAlias(HttpRequestHelpers.cleanPathVariable(tagName));

        return item.map(shortReadDto -> ResponseEntity.ok(
                new ObjectResponseDto<ShortReadDto>(shortReadDto, true, "")
        )).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
