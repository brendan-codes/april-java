package com.brendan.main.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brendan.main.models.Student;
import com.brendan.main.repos.StudentRepo;

@Service
public class StudentService {

	// injects repo into service
	@Autowired
	private StudentRepo studentRepo;
	
	
	public List<Student> allStudents(){
		return studentRepo.findAll();
	}
	
	public Student createStudent(Student s){
		return studentRepo.save(s);
	}

}
