import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  notes:string [] = [];

  constructor(private router:Router,private http:Http) { 
    
  }

  dec = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi tenetur magni reprehenderit";

  ngOnInit() {
    this.http.get('http://localhost:3000/notes').map(res=>res.json()).subscribe(notes=>{
      this.notes = notes;
    });
  }

  goView(id){
    this.router.navigate(['/note',id]);
  }

}
