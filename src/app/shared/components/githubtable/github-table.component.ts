import { Component } from '@angular/core';

@Component({
  selector: 'jeh-github-table',
  templateUrl: './github-table.component.html',
  styleUrls: ['./github-table.component.scss']
})
export class GithubTableComponent {

  tableHeaders: string[] = ['Name', 'Area', 'Something', 'Else'];
  tableContent: { name: string, area: string, something: Number, else: Date }[] = [
    { 
      name: 'asd', 
      area: 'asdasd', 
      something: 1, 
      else: new Date() 
    },
    { 
      name: 'asd', 
      area: 'asdasd', 
      something: 1, 
      else: new Date() 
    },
    { 
      name: 'asd', 
      area: 'asdasd', 
      something: 1, 
      else: new Date() 
    },
  ]

  constructor() {

  }

}
