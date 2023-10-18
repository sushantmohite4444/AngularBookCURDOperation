import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books:any[]=[];
  constructor(private bookService:BookService){
    
  }
  ngOnInit() {
    this.bookService.getBooks().subscribe((data:any )=>
    {this.books=data})
  }
  
  deleteBook(id:any){
    console.log(id);
    this.bookService.deleteBook(id).subscribe((result)=>{
      this.books=this.books.filter(iterm=>iterm.id !== id)
    })
  }

}
