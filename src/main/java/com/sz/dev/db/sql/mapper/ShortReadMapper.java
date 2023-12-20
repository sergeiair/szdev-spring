package com.sz.dev.db.sql.mapper;

import com.sz.dev.db.sql.entity.ShortRead;
import com.sz.dev.dto.ShortReadDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ShortReadMapper implements Mapper<ShortRead, ShortReadDto> {

    @Override
    public ShortRead map(ShortReadDto fromObject, ShortRead toObject) {
        return null;
    }

    @Override
    public ShortReadDto map(ShortRead object) {

        return new ShortReadDto(
                object.getId(),
                object.getTitle(),
                object.getPreview(),
                object.getContent(),
                object.getUrlAlias(),
                object.getCreatedAt(),
                object.getModifiedAt()
        );
    }
}
