package com.sz.dev.db.sql.mapper.tags;

import com.sz.dev.db.sql.entity.TagEntity;
import com.sz.dev.db.sql.mapper.Mapper;
import com.sz.dev.dto.TagDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class TagsReadMapper implements Mapper<TagEntity, TagDto> {


    @Override
    public TagDto map(TagEntity object) {
        return new TagDto(
                object.getId(),
                object.getContent(),
                object.getPublished()
        );
    }
}
