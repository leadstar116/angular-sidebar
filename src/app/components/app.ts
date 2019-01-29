import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: '../templates/app.html',
  styleUrls: ['../styles/app.scss']
})
export class AppComponent {
  title = 'angular-app';
  events: string[] = [];
  opened: boolean = true;
  showMenu: boolean = true;
  showSubMenu: boolean = true;
  fillerContent = Array.from({length: 10}, () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

}
