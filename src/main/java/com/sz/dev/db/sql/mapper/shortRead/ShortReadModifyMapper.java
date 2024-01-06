package com.sz.dev.db.sql.mapper.shortRead;

import com.sz.dev.db.sql.entity.ShortReadEntity;
import com.sz.dev.db.sql.entity.TagEntity;
import com.sz.dev.db.sql.mapper.Mapper;
import com.sz.dev.dto.shortRead.ShortReadWriteDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ShortReadModifyMapper implements Mapper<ShortReadWriteDto, ShortReadEntity> {

    @Override
    public ShortReadEntity map(ShortReadWriteDto fromObject, ShortReadEntity toObject) {
        copy(fromObject, toObject);
        return toObject;
    }

    @Override
    public ShortReadEntity map(ShortReadWriteDto object) {
        ShortReadEntity shortReadEntity = new ShortReadEntity();
        copy(object, shortReadEntity);

        return shortReadEntity;
    }

    private void copy(ShortReadWriteDto shortReadDto, ShortReadEntity shortReadEntity) {
        shortReadEntity.setContent(shortReadDto.getContent());
        shortReadEntity.setPublished(shortReadDto.getPublished());
        shortReadEntity.setTitle(shortReadDto.getTitle());
        shortReadEntity.setId(shortReadDto.getId());
        shortReadEntity.setPreview(shortReadDto.getPreview());
        shortReadEntity.setCreatedAt(shortReadDto.getCreated());
        shortReadEntity.setModifiedAt(shortReadDto.getModified());
        shortReadEntity.setUrlAlias(shortReadDto.getUrlAlias());
        shortReadEntity.setTags(shortReadDto.getTags().stream()
                .map(id -> new TagEntity(id, "", false)).toList());
    }
}
