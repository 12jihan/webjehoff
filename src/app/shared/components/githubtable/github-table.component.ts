import { Component, OnInit } from '@angular/core';
import { GithubRepo } from 'src/app/core/models/GithubServiceModel';
import { GithubService } from 'src/app/core/services/github-service/github.service';

@Component({
  selector: 'jeh-github-table',
  templateUrl: './github-table.component.html',
  styleUrls: ['./github-table.component.scss']
})
export class GithubTableComponent implements OnInit {

  tableHeaders: string[] = [];
  repoContent: GithubRepo[] = [];

  constructor(private _gh: GithubService) {
  }

  ngOnInit(): void {
    this.repoContent = this._gh.getRepos();
  }
}
