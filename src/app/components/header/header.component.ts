import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showArrow:boolean;
  constructor(private router:Router) {
     this.router.events.subscribe((url:any) => {
       if(url.url.length > 1){
         this.showArrow = true;
       }
       else{
          this.showArrow = false;
       }
       
     });
   }

  ngOnInit() {
  }

}
