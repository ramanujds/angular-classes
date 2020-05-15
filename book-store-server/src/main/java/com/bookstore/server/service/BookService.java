package com.bookstore.server.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookstore.server.model.Book;
import com.bookstore.server.repo.BookRepo;

@Service
public class BookService {
	@Autowired
	BookRepo repo;
	public Book addBook(Book book) {
		return repo.save(book);
	}
	
	public List<Book> getAllBook(){
		return repo.findAll();
	}
	public Book getBookById(int id) {
		return repo.getOne(id);
	}
	public Book updateBook(Book book) {
		return repo.save(book);
	}

	public void deleteBookById(int id) {
		// TODO Auto-generated method stub
		 repo.deleteById(id);
	}

}
