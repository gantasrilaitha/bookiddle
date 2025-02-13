package com.example.bookbackend.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bookbackend.exception.ResourceNotFoundException;
import com.example.bookbackend.model.SyllabusUnit;
import com.example.bookbackend.repository.unitrepo;

@Service
public class UnitServiceImpl implements UnitService {

    @Autowired
    private unitrepo unit_repo;
    
    @Override
    public SyllabusUnit createSyllabusUnit(SyllabusUnit unit) {
        try{
            SyllabusUnit new_unit=unit_repo.save(unit);
            return new_unit;
        }catch(Exception exp){
            throw new RuntimeException("Error saving unit"+exp.getMessage(),exp);
        }
    }

    @Override
    public List<SyllabusUnit> getAllUnits(){
        List<SyllabusUnit> list_units=unit_repo.findAll();
        return list_units;
    }

    @Override
    public SyllabusUnit getUnitByTitle(String title) {
        Optional<SyllabusUnit> unit=unit_repo.findByTitle(title);
        System.out.println(unit);
        if(unit.isPresent()){
            return unit.get();
        }
        else{
            throw new ResourceNotFoundException("Unit not found by title");
        }
    }

    @Override
    public SyllabusUnit getUnitById(Integer id){
        Optional<SyllabusUnit> unit=unit_repo.findById(id);
        if(unit.isPresent()){
            return unit.get();
        }else{
            throw new ResourceNotFoundException("Unit not found by id");
        }
        
    }

    @Override
    public SyllabusUnit updateUnit(SyllabusUnit unit){
        try{
            SyllabusUnit updated_unit=getUnitById(unit.getId());
            //System.out.println(updated_unit);
            unit_repo.save(unit);
            return updated_unit;
        }catch(ResourceNotFoundException ex){
            throw new ResourceNotFoundException(ex.getMessage());

        }
    }


    @Override
    public boolean deleteUnitById(Integer id){
        Optional<SyllabusUnit> unit=unit_repo.findById(id);
		if (unit.isPresent()){
			unit_repo.deleteById(id);
			return true;
		}
		else{
			throw new ResourceNotFoundException("Unitnot found");
		}
		
    }
    
}
