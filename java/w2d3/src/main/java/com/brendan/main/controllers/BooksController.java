package com.brendan.main.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.brendan.main.models.Book;
import com.brendan.main.services.BookService;

@Controller
public class BooksController {
    private final BookService bookService;
    
    public BooksController(BookService bookService) {
        this.bookService = bookService;
    }
    
    @RequestMapping("/books")
    public String index(Model model) {
        List<Book> books = bookService.allBooks();
        model.addAttribute("books", books);
        return "/books/index.jsp";
    }
    
    // showing the new page
    @RequestMapping("/books/new")
    public String newBook(@ModelAttribute("book") Book book) {
        return "/books/new.jsp";
    }
    
    // submitting the new page
    @RequestMapping(value="/books", method=RequestMethod.POST)
    public String create(@Valid @ModelAttribute("book") Book book, BindingResult result) {
        if (result.hasErrors()) {
            return "/books/new.jsp";
        } else {
            bookService.createBook(book);
            return "redirect:/books";
        }
    }
    
    @RequestMapping("/books/{id}")
    public String getBook(@PathVariable Long id, Model model, RedirectAttributes redirectAttributes){
    	Book book = bookService.findBook(id);
    	if(book != null) { // route protection for ids that don't exist
	    	model.addAttribute("book", book);
	    	return "/books/show.jsp";
    	}else{
    		redirectAttributes.addFlashAttribute("error", "that id does not exist");
    		return "redirect:/books";
    	}
    }
    
    @RequestMapping("/books/{id}/edit")
    public String editBook(@PathVariable Long id, Model model, RedirectAttributes redirectAttributes){
    	Book book = bookService.findBook(id);
    	if(book != null) { // route protection for ids that don't exist
	    	model.addAttribute("bookToBeEdited", book);
	    	return "/books/edit.jsp";
    	}else{
    		redirectAttributes.addFlashAttribute("error", "that id does not exist");
    		return "redirect:/books";
    	}
    }
    
    @RequestMapping(value="/books/{id}/edit", method=RequestMethod.PUT)
    public String update(@Valid @ModelAttribute("bookToBeEdited") Book book, BindingResult result) {
        if (result.hasErrors()) {
            return "/books/edit.jsp";
        } else {
            bookService.createBook(book);
            return "redirect:/books";
        }
    }
}