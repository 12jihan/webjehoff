import { Component } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'jeh-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  faEnvelope = faEnvelope;
}
