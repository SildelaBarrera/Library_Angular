import { Component } from '@angular/core';
import { empty } from 'rxjs';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})


export class BooksComponent {
  public book: Book;
  constructor(public bookService: BooksService,
              public toastr: ToastrService) {}

  public removeBook(noBook: Book) {

    this.bookService.delete(noBook);
    this.book = null;
  }

  public buscar(id_book:number){
    if(this.book = this.bookService.getOne(id_book)){
      return this.book;
    }
    if(id_book.toString() == ""){
      return this.bookService.getAll()
    }
    else{
      this.toastr.error("The book has not been found.")
    }
    
  }
}
