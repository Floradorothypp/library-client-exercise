import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Book } from '../Book';

import { BookService } from '../book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})


export class BookDetailComponent implements OnInit {

  //@Input() book: Book;
  book: Book;

  constructor(
  	private route: ActivatedRoute,
  	private location: Location,
  	private bookService: BookService
  ) { }

  ngOnInit(): void {
  	this.getBook();
  }

  getBook(): void {
  	const id = +this.route.snapshot.paramMap.get('id');
  	console.log(id);
  	this.bookService.getBook(id)
  	    .subscribe(book => this.book = book[0]);
  }

  goBack(): void {
  	this.location.back();
  }
}
