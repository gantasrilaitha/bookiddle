package com.example.bookbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;//Model: gets input from controller & renders to appropriate view
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.bookbackend.model.SyllabusUnit;
import com.example.bookbackend.repository.unitrepo;
import com.example.bookbackend.service.UnitServiceImpl;

@CrossOrigin(origins = "http://localhost:4200")
@Controller
@RequestMapping("/units")

public class UnitController {
    private UnitController() {
    }

    @Autowired
    unitrepo UnitRepository;

    @Autowired
    UnitServiceImpl unit_service;

    

    @GetMapping("/all-units")
    public ResponseEntity<List<SyllabusUnit>> getAllUnits() {
            List<SyllabusUnit> all_units=unit_service.getAllUnits();
            System.out.println(all_units);
            if (all_units.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
            }

            return ResponseEntity.status(200).body(all_units);// ResponseEntity: the body type, type of the response
                                                              // headers, and the status type.
        
    }

    @GetMapping("/get-unit-by-title/{title}")
    public ResponseEntity<SyllabusUnit> getUnitByTitle(@PathVariable("title") String title) {
        SyllabusUnit unitdata = unit_service.getUnitByTitle(title);

        if (unitdata!=null) {

            return new ResponseEntity<>(unitdata, HttpStatus.OK);
        } else {
            return  ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @PostMapping("/create_units")
    public ResponseEntity<SyllabusUnit> createunit(@RequestBody SyllabusUnit unit) {
        
        
            SyllabusUnit new_unit = unit_service.createSyllabusUnit(unit);
                    
            return ResponseEntity.status(200).body(new_unit);
        
    }

    @PutMapping("/update-units")
    public ResponseEntity<SyllabusUnit> updateUnit( @RequestBody SyllabusUnit unit) {
        SyllabusUnit updated_unitdata = unit_service.updateUnit(unit);
        return ResponseEntity.ok(updated_unitdata);
        
    }

    @DeleteMapping("/delete-unit/{id}")
    public ResponseEntity<Void> deleteUnit(@PathVariable("id") int id) {
        if (unit_service.deleteUnitById(id)){
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }

    

    @GetMapping("/get-unit-by-id/{id}")
    public ResponseEntity<SyllabusUnit> findById(@PathVariable int id) {
        
            SyllabusUnit unit = unit_service.getUnitById(id);

            if (unit==null) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(unit, HttpStatus.OK);
        
    }

}
