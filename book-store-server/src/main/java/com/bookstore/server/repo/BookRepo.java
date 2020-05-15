package com.bookstore.server.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookstore.server.model.Book;

public interface BookRepo extends JpaRepository<Book, Integer>{

}
