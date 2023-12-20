package com.sz.dev.db.sql.services;

import com.sz.dev.db.sql.mapper.ShortReadMapper;
import com.sz.dev.db.sql.mapper.ShortReadModifyMapper;
import com.sz.dev.db.sql.repository.ShortReadRepository;
import com.sz.dev.dto.ShortReadDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ShortReadService {
    private final ShortReadRepository shortReadRepository;
    private final ShortReadMapper shortReadMapper;
    private final ShortReadModifyMapper shortReadModifyMapper;

    public List<ShortReadDto> findAll() {
        return shortReadRepository.findAll().stream()
                .map(shortReadMapper::map)
                .toList();
    }

    @Transactional
    public ShortReadDto create(ShortReadDto shortReadDto) {
        return Optional.of(shortReadDto)
                .map(shortReadModifyMapper::map)
                .map(shortReadRepository::save)
                .map(shortReadMapper::map)
                .orElseThrow();
    }

    @Transactional
    public ShortReadDto update(ShortReadDto shortReadDto) {
        return Optional.of(shortReadDto)
                .map(shortReadModifyMapper::map)
                .map(shortReadRepository::save)
                .map(shortReadMapper::map)
                .orElseThrow();
    }
}
