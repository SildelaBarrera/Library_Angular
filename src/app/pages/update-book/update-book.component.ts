import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

  constructor(public bookService: BooksService) {}


public editar(titleEdited: string, typeEdited: string, authorEdited: string, 
            priceEdited: number, photoEdited: string, id_bookEdited: number){
    
    if(this.bookService.edit(titleEdited, typeEdited, authorEdited, 
      priceEdited, photoEdited, id_bookEdited)){
        alert("This book has been edited successfully."); 
    }
    else{
       alert("The book has not been found.")
    }
  }

}



