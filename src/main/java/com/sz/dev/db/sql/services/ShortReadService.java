package com.sz.dev.db.sql.services;

import com.sz.dev.db.sql.mapper.ShortReadMapper;
import com.sz.dev.db.sql.repository.ShortReadRepository;
import com.sz.dev.dto.ShortReadDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ShortReadService {
    private final ShortReadRepository shortReadRepository;
    private final ShortReadMapper shortReadMapper;

    public List<ShortReadDto> findAll() {
        return shortReadRepository.findAll().stream()
                .map(shortReadMapper::map)
                .toList();
    }
}
