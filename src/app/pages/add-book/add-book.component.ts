import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})

export class AddBookComponent {

  constructor(public bookService: BooksService,
              public toastr: ToastrService){}

  public enviar(titleNew:string, typeNew:string,authorNew:string,
    priceNew:number, photoNew:string, id_bookNew:number){

        this.bookService.add(titleNew, typeNew, authorNew, 
          priceNew, photoNew, id_bookNew);
          
          this.toastr.success('This book has been added successfully');
        
  }
}
