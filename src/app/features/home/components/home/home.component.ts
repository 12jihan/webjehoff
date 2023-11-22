import { Component, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'jeh-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  faEnvelope = faEnvelope;

  constructor(public _router: Router, private _injector: Injector) {

  }

  navigate() {
    const _otherRouter: Router = this._injector.get(Router);
    _otherRouter.navigate(["/contact"]);
    
  };
}