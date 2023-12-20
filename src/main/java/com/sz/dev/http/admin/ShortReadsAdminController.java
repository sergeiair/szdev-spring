package com.sz.dev.http.admin;


import com.sz.dev.db.sql.services.ShortReadService;
import com.sz.dev.dto.ListResponseDto;
import com.sz.dev.dto.ObjectResponseDto;
import com.sz.dev.dto.ShortReadDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import java.util.List;

@Controller
@RestController
@RequiredArgsConstructor
@EnableWebMvc
@RequestMapping("/api/v1/forme/short-reads")
public class ShortReadsAdminController {

    private final ShortReadService shortReadService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping()
    public ResponseEntity<ListResponseDto> findAll() {
        List<ShortReadDto> shortReadItemsList = shortReadService.findAll();

        return ResponseEntity.ok(
            new ListResponseDto<ShortReadDto>(shortReadItemsList, true, "")
        );
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping()
    public ResponseEntity<ObjectResponseDto<ShortReadDto>> create(@RequestBody ShortReadDto shortReadDto) {
        var item = shortReadService.create(shortReadDto);

        return ResponseEntity.status(HttpStatus.CREATED).body(
                new ObjectResponseDto<ShortReadDto>(item, true, "")
        );
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping()
    public ResponseEntity<ObjectResponseDto<ShortReadDto>> update(@RequestBody ShortReadDto shortReadDto) {
        var item = shortReadService.update(shortReadDto);

        return ResponseEntity.ok(
                new ObjectResponseDto<ShortReadDto>(item, true, "")
        );
    }

}
