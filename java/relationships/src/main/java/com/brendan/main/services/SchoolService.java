package com.brendan.main.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brendan.main.models.School;
import com.brendan.main.repos.SchoolRepo;

@Service
public class SchoolService {

	// injects repo into service
	@Autowired
	private SchoolRepo schoolRepo;
	
	
	public List<School> allSchools(){
		return schoolRepo.findAll();
	}
	
	public School createSchool(School s){
		return schoolRepo.save(s);
	}

}
