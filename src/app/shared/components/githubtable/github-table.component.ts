import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/core/services/github-service/github.service';

@Component({
  selector: 'jeh-github-table',
  templateUrl: './github-table.component.html',
  styleUrls: ['./github-table.component.scss']
})
export class GithubTableComponent implements OnInit {

  tableHeaders: string[] = [];
  repoContent: any[] = [];

  constructor(private _gh: GithubService) {
  }

  ngOnInit(): void {
  }

}
