package com.sz.dev.db.sql.mapper;

import com.sz.dev.db.sql.entity.ShortRead;
import com.sz.dev.dto.ShortReadDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
@RequiredArgsConstructor
public class ShortReadModifyMapper implements Mapper<ShortReadDto, ShortRead> {

    @Override
    public ShortRead map(ShortReadDto fromObject, ShortRead toObject) {
        copy(fromObject, toObject);
        return toObject;
    }

    @Override
    public ShortRead map(ShortReadDto object) {
        ShortRead shortRead = new ShortRead();
        copy(object, shortRead);

        return shortRead;
    }

    private void copy(ShortReadDto shortReadDto, ShortRead shortRead) {
        shortRead.setContent(shortReadDto.getContent());
        shortRead.setTitle(shortReadDto.getTitle());
        shortRead.setId(shortReadDto.getId());
        shortRead.setPreview(shortReadDto.getPreview());
        shortRead.setCreatedAt(shortReadDto.getCreated());
        shortRead.setModifiedAt(shortReadDto.getModified());
        shortRead.setUrlAlias(shortReadDto.getUrlAlias());

    }
}
