import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Book } from './book';
import { BOOKS } from './mock-books';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
  	private http: HttpClient,
	private messageService: MessageService
  ) { }

  /*getBooks(): Book[] {
  	return BOOKS;
  }*/

  getBooks(): Observable<Book[]> {
  	//this.messageService.add('BookService: feteched books');
  	this.log('BookService: feteched books');
  	//return of(BOOKS);
  	return this.http.get<Book[]>(this.booksUrl);
  }

  getBook(id: number): Observable<Book[]> {
  	this.log(`feteched book id=$id`);
  	//return of(BOOKS.find(book => book.id === id));
  	return this.http.get<Book[]>(this.booksUrl+id);
  }

  private log(message: string){
  	this.messageService.add(`BookService: ${message}`);
  }

  booksUrl = 'http://127.0.0.1:8080/event/';
}
