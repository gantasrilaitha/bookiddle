package com.example.bookbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.bookbackend.model.SyllabusUnit;

public interface unitrepo extends JpaRepository<SyllabusUnit, Long> {
    List<SyllabusUnit> findByTaught(boolean ptaught);

    List<SyllabusUnit> findByTitle(String title);
}
