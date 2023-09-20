import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template:'<router-outlet></router-outlet>',
  // templateUrl:'app.component.html',
  // styleUrls: ['./app.component.scss'],
 
})
export class AppComponent implements OnInit {

 title = 'TactsoftApp';

constructor(
  private route : Router,
  private titleservice : Title,
  // private iconservice : IconSetService
){
  titleservice.setTitle(this.title)
// iconservice.icons = {...iconSubset}
}

  ngOnInit(): void {
   this.route.events.subscribe((evt)=>{
if(!(evt instanceof NavigationEnd)){
  return
}
   })
  }
}
