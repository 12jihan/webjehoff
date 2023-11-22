import { Component, OnInit } from '@angular/core';
import { GithubRepo } from 'src/app/core/models/GithubServiceModel';
import { GithubService } from 'src/app/core/services/github-service/github.service';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'jeh-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss'
})
export class MainpageComponent implements OnInit {

  tableHeaders: string[] = ['Name', 'Language', 'Description'];
  repoContent: GithubRepo[] = [];
  faChevronRight = faChevronCircleRight;
  
  constructor(private _gh: GithubService, private _router: Router, private _ar: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.repoContent = this._gh.getRepos();
  }

  repoDetails(repo: GithubRepo) {
    this._router.navigate(['home/', repo.repo_id], { state: repo });
  }

}
