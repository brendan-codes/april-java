package com.brendan.main.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.brendan.main.models.School;
import com.brendan.main.models.Student;
import com.brendan.main.services.SchoolService;
import com.brendan.main.services.StudentService;

@Controller
public class MainController {

	@Autowired
	private SchoolService schoolService;
	
	@Autowired
	private StudentService studentService;
	
	
//	@GetMapping("/")
//	public String index() {
//		return "index.jsp";
//	}
	
	@GetMapping("/schools")
	public String showNewSchool(@ModelAttribute School school, Model model) {
		model.addAttribute("schools", schoolService.allSchools());
		return "newSchool.jsp";
	}
	
	@PostMapping("/schools")
	public String createSchool(@Valid @ModelAttribute School school, BindingResult res, Model model) {
		if(res.hasErrors()) {
			model.addAttribute("schools", schoolService.allSchools());
			return "newSchool.jsp";
		}else {
			schoolService.createSchool(school);
			return "redirect:/schools";
		}
	}
	
	@GetMapping("/students")
	public String showNewStudents(@ModelAttribute Student student, Model model) {
		model.addAttribute("schools", schoolService.allSchools());
		model.addAttribute("students", studentService.allStudents());
		return "newStudent.jsp";
	}
	
	@PostMapping("/students")
	public String createStudent(@Valid @ModelAttribute Student student, BindingResult res, Model model) {
		if(res.hasErrors()) {
			model.addAttribute("schools", schoolService.allSchools());
			model.addAttribute("students", studentService.allStudents());
			return "newStudent.jsp";
		}else {
			studentService.createStudent(student);
			return "redirect:/students";
		}
	}
}
