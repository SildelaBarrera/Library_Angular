import { Injectable } from '@angular/core';
import { Book } from 'src/app/models/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private books: Book[];
  private url:string = "http://localhost:3000/book"

  constructor(private http: HttpClient) {}
  
  getAll(id_user: number):Observable<Object> {
    let urlNueva = this.url+"?id_user="+id_user;
    return this.http.get(urlNueva)
  }
  getOne(id_user:number, id_book:number):Observable<Object> {
    let urlNueva = this.url+"?id_user="+id_user+"&id_book="+id_book;
    return this.http.get(urlNueva)   
  }

  add(title: string, type: string, author: string,
    price: number, photo: string, id_user:number):Observable<Object> {

    let newBook = new Book(id_user,title, type, author, price, photo, );  
    return this.http.post(this.url, newBook)
  }

  edit(id_book: number, id_user:number, title: string, type: string, author: string,
    price: number, photo: string): Observable<Object> {
    
    let editedBook= {id_book, id_user, title, type, author, price, photo}
    console.log(editedBook)
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


