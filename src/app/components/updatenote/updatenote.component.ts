import { Component} from '@angular/core';
import {FormGroup,FormControl,Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.css']
})
export class UpdatenoteComponent {

  formNote:FormGroup;
  noteID:string = "";
  noteContent:Object[] = [];

  constructor(private http:Http,private _ActivatedRoute:ActivatedRoute) {
    this._ActivatedRoute.params.subscribe(params=>{
      this.noteID = params.id;
    });

    this.formNote = new FormGroup(
        {
          name: new FormControl('',Validators.required),
          description: new FormControl('',Validators.required)
        }
      )

    this.http.get(`http://localhost:3000/note/${this.noteID}`).map(res=>res.json()).subscribe(note=>{
      this.formNote = new FormGroup(
        {
          name: new FormControl(note.name,Validators.required),
          description: new FormControl(note.description,Validators.required)
        }
      )
    },err=>{
      alert(err)
    });

    
   }

  saveNote(form){

    let body = {
      name:form.value.name,
      description: form.value.description
    };

    this.http.patch(`http://localhost:3000/note/${this.noteID}`,body).map(res=>res.json()).subscribe(note=>{
      alert('Your note have been update :)')
    },err=>{
      alert(err)
    });
  }

}
