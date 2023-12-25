package com.sz.dev.db.sql.services;

import com.sz.dev.db.sql.mapper.tags.TagsReadMapper;
import com.sz.dev.db.sql.mapper.tags.TagsModifyMapper;
import com.sz.dev.db.sql.repository.TagsRepository;
import com.sz.dev.dto.TagDto;
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

    public List<TagDto> findAll() {
        return tagsRepository.findAll().stream()
                .map(tagsMapper::map)
                .toList();
    }

    @Transactional
    public TagDto create(TagDto tagDto) {
        return Optional.of(tagDto)
                .map(tagsModifyMapper::map)
                .map(tagsRepository::save)
                .map(tagsMapper::map)
                .orElseThrow();
    }

    @Transactional
    public TagDto update(TagDto tagDto) {
        return Optional.of(tagDto)
                .map(tagsModifyMapper::map)
                .map(tagsRepository::save)
                .map(tagsMapper::map)
                .orElseThrow();
    }
}
