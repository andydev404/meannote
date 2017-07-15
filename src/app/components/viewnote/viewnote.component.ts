import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";

@Component({
  selector: 'app-viewnote',
  templateUrl: './viewnote.component.html',
  styleUrls: ['./viewnote.component.css']
})
export class ViewnoteComponent implements OnInit {

  noteID:string = "";
  noteContent:string[] = [];

  constructor(private http:Http, private _ActivatedRoute:ActivatedRoute,private router:Router) {
    this._ActivatedRoute.params.subscribe(params=>{
      this.noteID = params.id;
    });

    this.http.get(`http://localhost:3000/note/${this.noteID}`).map(res=>res.json()).subscribe(note=>{
      this.noteContent = note;
    });
   }

  ngOnInit() {
  }

  removeNote(id){
    this.http.delete(`http://localhost:3000/note/${id}`).map(res=>res.json()).subscribe(note=>{
      alert('Your note have been removed');
      this.router.navigate(['']);
    },err=>{
      alert(err)
    });
  }

  goUpdate(id){
    this.router.navigate(['/note','update',id]);
  }

}
