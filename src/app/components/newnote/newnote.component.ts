import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from "@angular/forms";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";

@Component({
  selector: 'app-newnote',
  templateUrl: './newnote.component.html',
  styleUrls: ['./newnote.component.css']
})
export class NewnoteComponent implements OnInit {

  formNote:FormGroup;

  constructor(private http:Http) {
    this.formNote = new FormGroup(
      {
        name: new FormControl('',Validators.required),
        description: new FormControl('',Validators.required)
      }
    )
   }

  ngOnInit() {

  }

  saveNote(form){

    let body = {
      name:form.value.name,
      description: form.value.description
    };

    this.http.post('http://localhost:3000/notes',body).map(res=>res.json()).subscribe(note=>{
      alert('Your note have been added :)')
    },err=>{
      alert(err)
    });
    this.formNote.reset();
  }

}
