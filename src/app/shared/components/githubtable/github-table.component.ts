import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/core/services/github-service/github.service';

@Component({
  selector: 'jeh-github-table',
  templateUrl: './github-table.component.html',
  styleUrls: ['./github-table.component.scss']
})
export class GithubTableComponent implements OnInit {

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

  constructor(private _gh: GithubService) {

  }

  ngOnInit(): void {
    this._gh.getRepos();
  }

}
