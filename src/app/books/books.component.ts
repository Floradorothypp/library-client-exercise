import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

//import { BOOKS } from '../mock-books';

import { BookService } from '../book.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private bookService: BookService, private messageService: MessageService) { } // also define a private property

  ngOnInit(): void {
  	this.getBooks();
  }

  onSelect(book: Book) : void{
  	this.selectedBook = book;
  	this.messageService.add(`BookService: Selected book id=${book.id}`);
  }

  getBooks() : void{
  	//this.mockbooks = this.bookService.getBooks();
    this.bookService.getBooks()
        .subscribe(mockbooks => this.mockbooks = mockbooks);
  }

  /*book: Book = {
  	id: 1,
  	name: 'Harry Potter 1'
  };*/

  mockbooks : Book[];
  selectedBook: Book;

}
