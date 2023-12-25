package com.sz.dev.db.sql.services;

import com.sz.dev.db.sql.mapper.shortRead.ShortReadReadMapper;
import com.sz.dev.db.sql.mapper.shortRead.ShortReadModifyMapper;
import com.sz.dev.db.sql.repository.ShortReadRepository;
import com.sz.dev.dto.shortRead.ShortReadDto;
import com.sz.dev.dto.shortRead.ShortReadWriteDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ShortReadService {
    private final ShortReadRepository shortReadRepository;
    private final ShortReadReadMapper shortReadMapper;
    private final ShortReadModifyMapper shortReadModifyMapper;

    public List<ShortReadDto> findAll() {
        return shortReadRepository.findAll().stream()
                .map(shortReadMapper::map)
                .toList();
    }

    public List<ShortReadDto> findAllWithTags() {
        return shortReadRepository.findAllWithTags().stream()
                .map(shortReadMapper::map)
                .toList();
    }

    @Transactional
    public ShortReadDto create(ShortReadWriteDto shortReadDto) {
        return Optional.of(shortReadDto)
                .map(shortReadModifyMapper::map)
                .map(shortReadRepository::save)
                .map(shortReadMapper::map)
                .orElseThrow();
    }

    @Transactional
    public ShortReadDto update(ShortReadWriteDto shortReadDto) {
        return Optional.of(shortReadDto)
                .map(shortReadModifyMapper::map)
                .map(shortReadRepository::save)
                .map(shortReadMapper::map)
                .orElseThrow();
    }
}
