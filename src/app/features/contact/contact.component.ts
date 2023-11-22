import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'jeh-contact',
  templateUrl: './contact.component.html',
  imports:[FormsModule, SharedModule],
  standalone: true,
  styleUrl: './contact.component.scss',
})
export class ContactComponent {

}
