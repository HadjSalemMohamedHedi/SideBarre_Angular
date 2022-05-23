import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { navbarData } from './nav-data';


interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }
@Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
collapsed = false;

screenWidth = 0;

navData = navbarData;
@HostListener('window:resize', ['$event'])
onResize(event: any){
  this.screenWidth = window.innerWidth;
if(this.screenWidth <= 768){
  this.collapsed = false;
  this.onToggleSideNav.emit({collapsed:this.collapsed, screenWidth: this.screenWidth});

}
}


toggleCollapse(){
  this.collapsed = !this.collapsed
  this.onToggleSideNav.emit({collapsed:this.collapsed, screenWidth: this.screenWidth});
}

closeSidenav(){
  this.collapsed = false;
  this.onToggleSideNav.emit({collapsed:this.collapsed, screenWidth: this.screenWidth});

}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

}