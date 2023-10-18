import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  bookEditform!:FormGroup;
 id!:number;
  constructor(private bookService:BookService,
    private route:ActivatedRoute
    ){
    
  }
  ngOnInit() {
    this.id=this.route.snapshot.params['id'];

    this.bookEditform=new FormGroup({
      id:new FormControl('',[Validators.required]),
      name:new FormControl('',[Validators.required]),
      category:new FormControl('',[Validators.required]),
      writer:new FormControl('',[Validators.required])

    })
    this.bookService.getBook(this.id).subscribe((x)=>this.bookEditform.patchValue(x))
  }
  Editbook(){
    this.bookService.updateBook(this.bookEditform.value)
  }
}
