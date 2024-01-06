package com.sz.dev.db.sql.mapper.tags;

import com.sz.dev.db.sql.entity.TagEntity;
import com.sz.dev.db.sql.mapper.Mapper;
import com.sz.dev.dto.TagDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class TagsModifyMapper implements Mapper<TagDto, TagEntity> {

    @Override
    public TagEntity map(TagDto fromObject, TagEntity toObject) {
        copy(fromObject, toObject);
        return toObject;
    }

    @Override
    public TagEntity map(TagDto object) {
        TagEntity tagEntity = new TagEntity();
        copy(object, tagEntity);

        return tagEntity;
    }

    private void copy(TagDto tagDto, TagEntity tagEntity) {
        tagEntity.setContent(tagDto.getContent());
        tagEntity.setId(tagDto.getId());
        tagEntity.setPublished(tagDto.getPublished());
    }
}
