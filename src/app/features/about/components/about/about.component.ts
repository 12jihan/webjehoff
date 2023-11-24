import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'jeh-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  constructor(private _router: Router) {

  }

  navigate() {
    this._router.navigate(['/blog']);
  }
}
