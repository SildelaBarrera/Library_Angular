import { Component } from '@angular/core';
import { empty } from 'rxjs';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})


export class BooksComponent {

  public books: Book[];
 

  constructor(){
  
     this.books = [
      new Book("Harry Poter and the Philosopher's Stone", "Soft cover", "J. K. Rowling", 10.50,"https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale/jackets/9781526626585.jpg", 15484894, 28),
      new Book("El nombre del viento", "Hard cover", "Patrick Rothfuss",22,"https://imagessl8.casadellibro.com/a/l/s7/48/9788401352348.webp", 165184, 16),
      new Book("Caraval", "Soft cover", "Stephanie Garber",15,"https://tienda.sophosenlinea.com/imagenes/9786077/978607748296.GIF", 131548, 9)
    ] 
  }

  
  enviar(titleNew:string, typeNew:string,authorNew:string,
           priceNew:number, photoNew:string, id_bookNew:number, 
           id_userNew:string){
   
           
    let bookNew = new Book(titleNew, typeNew, authorNew, priceNew, photoNew, id_bookNew, parseInt(id_userNew) )
    
      if(id_userNew === ""){
        bookNew = new Book(titleNew, typeNew, authorNew, priceNew, photoNew, id_bookNew )  
      }

    this.books.push(bookNew)
  }

  public removeBook(noBook: Book){
    
    let newArray = this.books.filter(book => book.id_book != noBook.id_book);

    this.books = newArray;
  }
 
}
