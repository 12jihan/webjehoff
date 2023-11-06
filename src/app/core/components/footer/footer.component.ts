import { Component } from '@angular/core';

@Component({
  selector: 'jeh-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  current_year: Date = new Date;
  copyright: string = `Copyright © ${this.current_year.getFullYear()} Jareem E. Hoff`; 
  
  constructor() {}


}
