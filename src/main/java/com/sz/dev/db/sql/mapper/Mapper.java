package com.sz.dev.db.sql.mapper;

import com.sz.dev.db.sql.entity.ShortRead;
import com.sz.dev.dto.ShortReadDto;

public interface Mapper<F, T> {

    ShortRead map(ShortReadDto fromObject, ShortRead toObject);

    T map(F object);

    default T map(F fromObject, T toObject) {
        return toObject;
    }
}
