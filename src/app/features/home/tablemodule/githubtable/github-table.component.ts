import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GithubRepo } from 'src/app/core/models/GithubServiceModel';
import { GithubService } from 'src/app/core/services/github-service/github.service';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'jeh-github-table',
  templateUrl: './github-table.component.html',
  styleUrls: ['./github-table.component.scss']
})
export class GithubTableComponent implements OnInit {

  tableHeaders: string[] = ['Name', 'Language', 'Description'];
  repoContent: GithubRepo[] = [];
  faChevronRight = faChevronCircleRight;

  constructor(private _gh: GithubService, private _router: Router) {
  }

  ngOnInit(): void {
    // we don't need this any longer...
    // this.repoContent = this._gh.getRepos();
  }

  
}