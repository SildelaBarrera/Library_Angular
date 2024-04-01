import { Injectable } from '@angular/core';
import { Book } from 'src/app/models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private books: Book[];


  constructor() {
    this.books = [
      new Book("Harry Potter and the Philosopher's Stone", "Soft cover", "J. K. Rowling", 10.50, "https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale/jackets/9781526626585.jpg", 1),
      new Book("El nombre del viento", "Hard cover", "Patrick Rothfuss", 22, "https://imagessl8.casadellibro.com/a/l/s7/48/9788401352348.webp", 2),
      new Book("Caraval", "Soft cover", "Stephanie Garber", 15, "https://tienda.sophosenlinea.com/imagenes/9786077/978607748296.GIF", 3),
      new Book("Harry Potter and the Chamber of Secrets", "Soft cover", "J. K. Rowling", 11, "https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale/jackets/9781526637888.jpg", 4)
    ]
  }

  getAll(): Book[] {
    return (this.books)
  }
  getOne(id_book:number):Book {
    
    let searchedBook: Book;
  
    if(searchedBook = this.books.find((aBook) => aBook.id_book == id_book)){
      console.log(searchedBook);
    }
    
    return searchedBook;    
      
  }

  add(titleNew: string, typeNew: string, authorNew: string,
    priceNew: number, photoNew: string, id_bookNew: number): void {

    let newBook = new Book(titleNew, typeNew, authorNew,
      priceNew, photoNew, id_bookNew);
    this.books.push(newBook);
  }

  edit(titleEdited: string, typeEdited: string, authorEdited: string,
    priceEdited: number, photoEdited: string, id_bookEdited: number): boolean {

    for (let i = 0; i < this.books.length; i++){
      if(this.books[i].id_book == id_bookEdited){
        if(titleEdited != ""){
          this.books[i].title = titleEdited;
        }
        if(typeEdited != ""){
          this.books[i].type = typeEdited;
        }
        if(authorEdited != ""){
          this.books[i].author = authorEdited;
        }
        if(priceEdited != null){
          this.books[i].price = priceEdited;
        }
        if(photoEdited != ""){
          this.books[i].photo = photoEdited;
        }
        if(id_bookEdited != null){
          this.books[i].id_book = id_bookEdited;
        }
        return true;
      }
    }
    return false;
  }

  delete(noBook: Book): Book[] {

    let booksFinale = this.books.filter(book => book.id_book != noBook.id_book);

    this.books = booksFinale;
    console.log(booksFinale);
    return (booksFinale);

  }
}


