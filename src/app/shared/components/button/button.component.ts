import { Component, Input } from '@angular/core';

@Component({
  selector: 'jeh-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})

export class ButtonComponent {
  @Input() btnText: string = '';
  @Input() execute: () => void = () => {};


}
