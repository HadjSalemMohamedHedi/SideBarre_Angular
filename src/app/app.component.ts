import { Component } from '@angular/core';


interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'composants_web';

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle){
      this.screenWidth = data.screenWidth;
      this.isSideNavCollapsed = data.collapsed;
  }
}
