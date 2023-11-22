import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'jeh-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  faEnvelope = faEnvelope;

  constructor(private _router: Router) {

  }

  navigate() {
    console.log("asdasd: ",   )
    this._router.navigateByUrl("/contact");
  };
}