import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

  constructor(public bookService: BooksService,
              public toastr: ToastrService) {}


public editar(titleEdited: string, typeEdited: string, authorEdited: string, 
            priceEdited: number, photoEdited: string, id_bookEdited: number){
    
    if(this.bookService.edit(titleEdited, typeEdited, authorEdited, 
      priceEdited, photoEdited, id_bookEdited)){
        this.toastr.success("This book has been edited successfully."); 
    }
    else{
      this.toastr.warning("The book has not been found.")
    }
  }

}



