package com.brendan.main.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class TemplatingController {


	@RequestMapping("/")
	public String index() {
		return "index.jsp";
	}
	
	
	@RequestMapping(path="/submit", method=RequestMethod.POST)
	public String form(@RequestParam String message, HttpSession sesh) {
		
		System.out.println("We have a message");
		System.out.println(message); 
		
		sesh.setAttribute("message", message);
		
		return "redirect:/results";
	}
	
	@RequestMapping("/results")
	public String results(HttpSession sesh, Model model) {
		String message = (String) sesh.getAttribute("message"); // pull message out and typecast
		model.addAttribute("message", message); // set the message to the Model model
		return "results.jsp";
	}
}
