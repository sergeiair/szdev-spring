package com.sz.dev.db.sql.mapper.shortRead;

import com.sz.dev.db.sql.entity.ShortReadEntity;
import com.sz.dev.db.sql.mapper.Mapper;
import com.sz.dev.dto.shortRead.ShortReadDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class ShortReadReadMapper implements Mapper<ShortReadEntity, ShortReadDto> {

    @Override
    public ShortReadDto map(ShortReadEntity object) {

        return ShortReadDto.builder()
                .id(object.getId())
                .published(object.getPublished())
                .title(object.getTitle())
                .preview(object.getPreview())
                .urlAlias(object.getUrlAlias())
                .published(object.getPublished())
                .preview(object.getPreview())
                .content(object.getContent())
                .created(object.getCreatedAt())
                .modified(object.getModifiedAt())
                .tags(object.getTags()).build();
    }
}
