package net.codinghermit.api;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import org.jooq.DSLContext;
import net.codinghermit.api.model.Tables;
import net.codinghermit.api.model.tables.pojos.*;

@Service
public class BookService {
    @Autowired
    DSLContext context;
    public List<Book> getBooks(){
       return context
                .selectFrom(Tables.BOOK)
                .fetchInto(Book.class);
    }
    public void insertBook(Book book){
        context
                .insertInto(Tables.BOOK, Tables.BOOK.AUTHOR,
                            Tables.BOOK.AUTHOR)
                .values(book.getTitle(), book.getAuthor())
                .execute();
    }
}
