import { Component } from '@angular/core';
import { empty } from 'rxjs';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})


export class BooksComponent {
  public book: Book;
  public library: Book[];
  constructor(public bookService: BooksService,
              public toastr: ToastrService) {}

  ngOnInit(): void {
    this.bookService.getAll().subscribe((resp:Respuesta) => {
      this.library = resp.dataLibrary;
    })
  }
 
  public buscar(id_book:number){
    this.bookService.getOne(id_book).subscribe((resp:Respuesta) => {
      console.log(id_book)

      if (id_book.toString() == ""){
        this.book = null;
      } else{
        if (resp.error){
          this.toastr.error("The book has not been found.")
        }
        else{
          this.book = resp.dataBook;
        }
      }
    });

  }
  public removeBook(noBook: Book) {
    this.bookService.delete(noBook.id_book).subscribe((resp: Respuesta) => {
      
      this.bookService.getAll().subscribe((resp:Respuesta) => {
        this.library = resp.dataLibrary;
      })
    });
    
  }
}
