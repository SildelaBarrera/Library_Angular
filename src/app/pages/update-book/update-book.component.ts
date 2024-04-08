import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

  constructor(public bookService: BooksService,
              public toastr: ToastrService) {}


public editar(title: string, type: string, author: string, 
            price: number, photo: string, id_book: number){

    this.bookService.edit(title, type, author, price, photo, id_book)
    .subscribe ((resp: Respuesta) => {
      if(resp.error){
        this.toastr.warning("The book has not been found.")
      }else{
        this.toastr.success("This book has been edited successfully."); 
      }
    })
  }
}



