package net.codinghermit.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import net.codinghermit.api.model.tables.pojos.Book;

@RestController
public class BookController {
    @Autowired
    BookService bookService;
    @GetMapping(value = "/books")
    public List<Book> getBooks(){
        return this.bookService.getBooks();
    }
    @PostMapping
    public void postBook(@RequestBody Book book){
        this.bookService.insertBook(book);
    }
}
