import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-bookcreate',
  templateUrl: './bookcreate.component.html',
  styleUrls: ['./bookcreate.component.css']
})
export class BookcreateComponent implements OnInit {
 
  bookcreateform!:FormGroup;
 
  constructor(private bookService:BookService){
    
  }
  ngOnInit() {
    this.bookcreateform=new FormGroup({
      id:new FormControl('',[Validators.required]),
      name:new FormControl('',[Validators.required]),
      category:new FormControl('',[Validators.required]),
      writer:new FormControl('',[Validators.required])

    })
  }
  createNewbook(){
    console.log("int add");
  this.bookService.createBooK(this.bookcreateform.value)
  }


  
}
