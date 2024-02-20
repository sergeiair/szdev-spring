package com.sz.dev.http.pub;


import com.sz.dev.db.sql.services.TagsService;
import com.sz.dev.dto.ListResponseDto;
import com.sz.dev.dto.ObjectResponseDto;
import com.sz.dev.dto.TagDto;
import com.sz.dev.dto.playground.SortingRequestDto;
import com.sz.dev.dto.playground.SortingResultDto;
import com.sz.dev.dto.playground.service.SortingPlaygroundService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import java.util.List;

@RestController
@RequiredArgsConstructor
@EnableWebMvc
@RequestMapping("/api/v1/playground")
@Slf4j
public class PlaygroundController {
    private final SortingPlaygroundService sortingPlaygroundService;

    @PostMapping("/sort")
    public ResponseEntity<ObjectResponseDto> sort(@RequestBody SortingRequestDto requestDto) {
        if (requestDto.getArray() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                new ObjectResponseDto<SortingResultDto>(null, false, "")
            );
        }

        SortingResultDto resultDto = sortingPlaygroundService.sort(requestDto);

        return ResponseEntity.status(HttpStatus.OK).body(
            new ObjectResponseDto<SortingResultDto>(resultDto, true, "")
        );
    }

}
