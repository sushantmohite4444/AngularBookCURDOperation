import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  SERVER_URL:string="http://localhost:8081/api/";
  constructor(private httpClient:HttpClient,private router:Router) { 

  }
  getBooks(){
      return this.httpClient.get(this.SERVER_URL + 'books')
}
deleteBook(bookId:any){
  return this.httpClient.delete(`${this.SERVER_URL + 'books'}/${bookId}`)
}

createBooK(book :{id:number,name:string,category:string,writer:string}){
  
  return this.httpClient.post(
    `${this.SERVER_URL+'books'}`,book).subscribe((res:any)=>{
      this.router.navigateByUrl('/book');
    });
}
getBook(id:number){
  return this.httpClient.get(`${this.SERVER_URL + 'books'}/${id}`)

}
updateBook(book:{id:number,name:string,catagory:string,writer:string}){

  return this.httpClient.put(
    `${this.SERVER_URL+'books'}/${book.id}`,book).subscribe((res:any) =>{
      this.router.navigateByUrl('/book')
    }
  )
}
}

