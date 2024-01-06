package com.sz.dev.db.sql.mapper.shortRead;

import com.sz.dev.db.sql.entity.ShortReadEntity;
import com.sz.dev.db.sql.mapper.Mapper;
import com.sz.dev.dto.shortRead.JsonShortReadDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class JsonShortReadMapper implements Mapper<ShortReadEntity, JsonShortReadDto> {

    @Override
    public JsonShortReadDto map(ShortReadEntity object) {
        return JsonShortReadDto.builder()
                .title(object.getTitle())
                .urlAlias(object.getUrlAlias())
                .content(object.getContent())
                .build();
    }
}
