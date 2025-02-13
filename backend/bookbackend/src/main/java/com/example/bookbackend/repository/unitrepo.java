package com.example.bookbackend.repository;

import java.util.*;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.bookbackend.model.SyllabusUnit;

public interface unitrepo extends JpaRepository<SyllabusUnit,Integer> {
    List<SyllabusUnit> findByTaught(boolean ptaught);

    Optional<SyllabusUnit> findByTitle(String title);
}
