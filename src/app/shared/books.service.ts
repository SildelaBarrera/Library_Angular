import { Injectable } from '@angular/core';
import { Book } from 'src/app/models/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private books: Book[];
  private url = "http://localhost:4000/book"

  constructor(private http: HttpClient) {}

  getAll():Observable<Object> {
    return this.http.get(this.url)
  }
  getOne(id_book:number):Observable<Object> {
    let urlNueva = this.url+"?id_book="+id_book;
    return this.http.get(urlNueva)   
  }

  add(titleNew: string, typeNew: string, authorNew: string,
    priceNew: number, photoNew: string, id_bookNew: number):Observable<Object> {

    let newBook = new Book(titleNew, typeNew, authorNew, priceNew, photoNew, id_bookNew);  
    return this.http.post(this.url, newBook)
  }

  edit(title: string, type: string, author: string,
    price: number, photo: string, id_book: number): Observable<Object> {
    
    let editedBook= {title, type, author, price, photo, id_book}
    return this.http.put(this.url, editedBook)
  }

  delete(id_book: Number): Observable<Object> {
  let options= {
    headers: {
      'Content-Type': 'application/json'
    },
    body:{
      'id_book': id_book
    }
  }

  return this.http.delete(this.url,options);
  }
}


