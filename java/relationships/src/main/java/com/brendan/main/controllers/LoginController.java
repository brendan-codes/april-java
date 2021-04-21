package com.brendan.main.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.brendan.main.models.User;
import com.brendan.main.services.UserService;
import com.brendan.main.validators.UserValidator;

// imports removed for brevity
@Controller
public class LoginController {
	private final UserService userService;
	private final UserValidator validator;
    
    public LoginController(UserService userService, UserValidator validator) {
        this.userService = userService;
        this.validator = validator;
    }
    
    @RequestMapping("/registration")
    public String registerForm(@ModelAttribute("user") User user) {
        return "registrationPage.jsp";
    }
    @RequestMapping("/login")
    public String login() {
        return "loginPage.jsp";
    }
    
    @RequestMapping(value="/registration", method=RequestMethod.POST)
    public String registerUser(@Valid @ModelAttribute("user") User user, BindingResult result, HttpSession session) {
    	// if result has errors, return the registration page (don't worry about validations just now)
        // else, save the user in the database, save the user id in session, and redirect them to the /home route
    	validator.validate(user, result);
    	if(result.hasErrors()) {
    		return "registrationPage.jsp";
    	}
    	User newUser = userService.registerUser(user);
    	session.setAttribute("user_id", newUser.getId());
    	return "redirect:/";
    }
    
    @RequestMapping(value="/login", method=RequestMethod.POST)
    public String loginUser(@RequestParam("email") String email, 
    						@RequestParam("password") String password, 
    						Model model, 
    						HttpSession session,
    						RedirectAttributes flash) {
        // if the user is authenticated, save their user id in session
        // else, add error messages and return the login page
    	if(userService.authenticateUser(email, password)) {
    		// user is authentic!
    		User thisUser = userService.findByEmail(email);
    		session.setAttribute("user_id", thisUser.getId());
    		return "redirect:/";
    	}
    	flash.addFlashAttribute("error", "failed to login");
    	return "redirect:/login";
    }
    
    @RequestMapping("/")
    public String home(HttpSession session, Model model) {
        // get user from session, save them in the model and return the home page
    	Long id = (Long) session.getAttribute("user_id");
    	
    	if(id == null) {
    		System.out.println("Can't find a logged in user");
    		return "redirect:/login";
    	}
    	
    	model.addAttribute("user", userService.findUserById(id));
    	return "index.jsp";
    }
    @RequestMapping("/logout")
    public String logout(HttpSession session) {
        // invalidate session
        // redirect to login page
    	session.invalidate();
    	return "redirect:/login";
    }
}
