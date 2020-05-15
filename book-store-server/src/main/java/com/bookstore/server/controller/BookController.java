package com.bookstore.server.controller;

import java.util.List;

import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookstore.server.model.Book;
import com.bookstore.server.service.BookService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class BookController {
	@Autowired
	BookService service;
	@PostMapping("/books")
	public Book addBook(@RequestBody Book book) {
		return service.addBook(book);
	}
	
	@GetMapping("/books")
	public List<Book> getAllBooks(){
		return service.getAllBook();
	}
	
	@GetMapping("/books/{id}")
	public Book getBookById(@PathVariable int id) {
		return service.getBookById(id);
	}
	
	@PutMapping("/books")
	public Book updaBook(@RequestBody Book book) {
		return service.updateBook(book);
	}
	
	@DeleteMapping("/books/{id}")
	public  void deleteBookById(@PathVariable int id) {
		 service.deleteBookById(id);
	}
	
	

}
