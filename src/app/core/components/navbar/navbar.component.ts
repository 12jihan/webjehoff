import { Component } from '@angular/core';

@Component({
  selector: 'jeh-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  navLinks: string[] = [
    'home',
    // 'about',
    // 'contact',
    // 'projects',
    // 'resume'
  ]
  
  constructor() {}

  test() {
    console.log("asdasd");
  }
}
