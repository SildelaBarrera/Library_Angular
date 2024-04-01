import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  constructor(public bookService: BooksService){}

  public enviar(titleNew:string, typeNew:string,authorNew:string,
    priceNew:number, photoNew:string, id_bookNew:number){

        this.bookService.add(titleNew, typeNew, authorNew, 
          priceNew, photoNew, id_bookNew);
        alert("This book has been added successfully.")
  
  }
}
