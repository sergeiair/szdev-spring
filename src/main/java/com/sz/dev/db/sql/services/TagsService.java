package com.sz.dev.db.sql.services;

import com.sz.dev.db.sql.mapper.tags.TagsReadMapper;
import com.sz.dev.db.sql.mapper.tags.TagsModifyMapper;
import com.sz.dev.db.sql.repository.TagsRepository;
import com.sz.dev.dto.TagDto;
import com.sz.dev.jsonCache.JsonCacheService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TagsService {
    private final TagsRepository tagsRepository;
    private final TagsReadMapper tagsMapper;
    private final TagsModifyMapper tagsModifyMapper;
    private final JsonCacheService<TagDto> jsonCacheService;

    public List<TagDto> findAll() {
        return tagsRepository.findAll().stream()
                .map(tagsMapper::map)
                .toList();
    }

    public List<TagDto> findAllPublished() {
        return tagsRepository.findAllPublished().stream()
                .map(tagsMapper::map)
                .toList();
    }

    @Transactional
    public TagDto create(TagDto tagDto) {
        TagDto item =  Optional.of(tagDto)
                .map(tagsModifyMapper::map)
                .map(tagsRepository::save)
                .map(tagsMapper::map)
                .orElseThrow();

        jsonCacheService.write(findAll(), "tags");

        return item;
    }

    @Transactional
    public TagDto update(TagDto tagDto) {
        TagDto item =  Optional.of(tagDto)
                .map(tagsModifyMapper::map)
                .map(tagsRepository::save)
                .map(tagsMapper::map)
                .orElseThrow();

        jsonCacheService.write(findAll(), "tags");

        return item;
    }
}
