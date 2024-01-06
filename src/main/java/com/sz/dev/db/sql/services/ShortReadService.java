package com.sz.dev.db.sql.services;

import com.sz.dev.db.sql.mapper.shortRead.JsonShortReadMapper;
import com.sz.dev.db.sql.mapper.shortRead.ShortReadModifyMapper;
import com.sz.dev.db.sql.mapper.shortRead.ShortReadReadMapper;
import com.sz.dev.db.sql.repository.ShortReadRepository;
import com.sz.dev.dto.shortRead.JsonShortReadDto;
import com.sz.dev.dto.shortRead.ShortReadDto;
import com.sz.dev.dto.shortRead.ShortReadWriteDto;
import com.sz.dev.jsonCache.JsonCacheService;
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
    private final JsonShortReadMapper jsonShortReadMapper;
    private final ShortReadModifyMapper shortReadModifyMapper;
    private final JsonCacheService<JsonShortReadDto> jsonCacheService;


    public List<ShortReadDto> findAll() {
        return shortReadRepository.findAll().stream()
                .map(shortReadMapper::map)
                .toList();
    }

    public List<ShortReadDto> findAllByTag(String tag) {
        return shortReadRepository.findAllByTag(tag).stream()
                .map(shortReadMapper::map)
                .toList();
    }

    public List<JsonShortReadDto> findAllAsJsonItems() {
        return shortReadRepository.findAllAsJsonItems().stream()
                .map(jsonShortReadMapper::map)
                .toList();
    }

    public Optional<ShortReadDto> findArticleByUrlAlias(String urlAlias) {
        return shortReadRepository.findByUrlAlias(urlAlias)
                .map(shortReadMapper::map);
    }

    public List<ShortReadDto> findAllWithTags() {
        return shortReadRepository.findAllWithTags().stream()
                .map(shortReadMapper::map)
                .toList();
    }

    @Transactional
    public ShortReadDto create(ShortReadWriteDto shortReadDto) {
        ShortReadDto item = Optional.of(shortReadDto)
                .map(shortReadModifyMapper::map)
                .map(shortReadRepository::save)
                .map(shortReadMapper::map)
                .orElseThrow();

        jsonCacheService.write(findAllAsJsonItems(), "posts");

        return item;
    }

    @Transactional
    public ShortReadDto update(ShortReadWriteDto shortReadDto) {
        ShortReadDto item = Optional.of(shortReadDto)
                .map(shortReadModifyMapper::map)
                .map(shortReadRepository::save)
                .map(shortReadMapper::map)
                .orElseThrow();

        jsonCacheService.write(findAllAsJsonItems(), "posts");

        return item;
    }


}
