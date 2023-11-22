import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'jeh-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})

export class ButtonComponent {
  @Input() btnText: string = '';
  @Output("execute") execute: EventEmitter<any> = new EventEmitter();

  onClick() {
    this.execute.emit();
  }
}
