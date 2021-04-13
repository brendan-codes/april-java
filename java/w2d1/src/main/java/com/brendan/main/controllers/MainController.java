package com.brendan.main.controllers;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

    @RequestMapping("/main")
    public String hello() { 
            return "Hello World!";
    }
    
    @RequestMapping("/doStuff")
    public String doStuff() {
    	return "Hello this is doStuff";
    }
    
    @RequestMapping("/home/{name}")
    public String showId(@PathVariable String name) {
    	return "this is the id! the name is " + name;
    }
}
