import { Component, OnInit } from '@angular/core';


interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'composants_web';

  isSideNavCollapsed = false;
  screenWidth = 0;

events: any[] = [];
  ngOnInit() {
this.events = [
  {content:'Ordred', date:'28-10-1994', statut: 'R'},
  {content:'Pick 1 ', date:'15--1999', statut: 'R'},
  {content:'Processing '},
  {content:'Not ordred', date:'20-06-2013', statut: 'R'},
]

  }

  onToggleSideNav(data: SideNavToggle){
      this.screenWidth = data.screenWidth;
      this.isSideNavCollapsed = data.collapsed;
  }



}
