package com.example.bookbackend.service;
import java.util.*;
import com.example.bookbackend.model.SyllabusUnit;

public interface UnitService {
 SyllabusUnit createSyllabusUnit( SyllabusUnit unit);
 List<SyllabusUnit> getAllUnits();
 SyllabusUnit getUnitByTitle(String title);
 SyllabusUnit getUnitById(Integer id);
 SyllabusUnit updateUnit(SyllabusUnit unit);
 boolean deleteUnitById(Integer id);
}
