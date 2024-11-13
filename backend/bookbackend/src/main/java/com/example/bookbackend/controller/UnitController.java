package com.example.bookbackend.controller;

import java.util.ArrayList;
import java.util.List;

//import org.apache.el.stream.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;//Model: gets input from controller & renders to appropriate view
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import java.util.Optional;
import com.example.bookbackend.model.SyllabusUnit;
import com.example.bookbackend.repository.unitrepo;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

@CrossOrigin(origins = "http://localhost:8080")
@Controller
@RequestMapping("/api")

public class UnitController {
    private UnitController() {
    }

    @Autowired
    unitrepo UnitRepository;

    @GetMapping("/hello")
    public String sayHello(Model model) {
        System.out.println("Homepg");
        return "hello";
    }

    @GetMapping("/units")
    public ResponseEntity<List<SyllabusUnit>> getAllUnits(@RequestParam(required = false) String title) {
        try {
            List<SyllabusUnit> units = new ArrayList<SyllabusUnit>();
            System.out.println(units);
            if (title == null)
                UnitRepository.findAll().forEach(units::add);// add data from db to units list in a loop
            else
                UnitRepository.findByTitle(title).forEach(units::add);// add data from db to units list in a loop

            if (units.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(units, HttpStatus.OK);// ResponseEntity: the body type, type of the response
                                                              // headers, and the status type.
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/units/{id}")
    public ResponseEntity<SyllabusUnit> getTutorialById(@PathVariable("id") long id) {
        Optional<SyllabusUnit> unitdata = UnitRepository.findById(id);

        if (unitdata.isPresent()) {

            return new ResponseEntity<>(unitdata.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/units")
    public ResponseEntity<SyllabusUnit> createunit(@RequestBody SyllabusUnit unit) {
        try {
            SyllabusUnit _unit = UnitRepository
                    .save(new SyllabusUnit(unit.getTitle(), unit.getDescription(), false));
            return new ResponseEntity<>(_unit, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/units/{id}")
    public ResponseEntity<SyllabusUnit> updateUnit(@PathVariable("id") long id, @RequestBody SyllabusUnit unit) {
        Optional<SyllabusUnit> unitdata = UnitRepository.findById(id);

        if (unitdata.isPresent()) {
            SyllabusUnit _unit = unitdata.get();
            _unit.setTitle(unit.getTitle());
            _unit.setDescription(unit.getDescription());
            _unit.setPublished(unit.isTaught());
            return new ResponseEntity<>(UnitRepository.save(_unit), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/units/{id}")
    public ResponseEntity<HttpStatus> deleteUnit(@PathVariable("id") long id) {
        try {
            UnitRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/units")
    public ResponseEntity<HttpStatus> deleteAllUnits() {
        try {
            UnitRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @GetMapping("/units/taught")
    public ResponseEntity<List<SyllabusUnit>> findByTaught() {
        try {
            List<SyllabusUnit> units = UnitRepository.findByTaught(true);

            if (units.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(units, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
