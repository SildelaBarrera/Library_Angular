import { Component } from '@angular/core';
import { empty } from 'rxjs';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})


export class BooksComponent {
  public book: Book;
  constructor(public bookService: BooksService) {}

  public removeBook(noBook: Book) {

    this.bookService.delete(noBook);
    this.book = null;
  }

  public buscar(id_book:number){
    if(this.book = this.bookService.getOne(id_book)){
      return this.book;
    }
    else{
      alert("The book has not been found.")
    }
  }
}
