import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubRepo } from 'src/app/core/models/GithubServiceModel';
import { faChevronCircleLeft, faCodeFork, faCode, faScaleUnbalanced, faStar } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-brands-svg-icons';
import {  } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'jeh-detailspage',
  templateUrl: './detailspage.component.html',
  styleUrl: './detailspage.component.scss'
})
export class DetailspageComponent {

  repo_data: GithubRepo | undefined;
  faChevronLeft = faChevronCircleLeft;
  faCodeFork = faCodeFork;
  faCode = faCode;
  faScaleUnbalanced = faScaleUnbalanced;
  faStar = faStar;
  math = Math;

  constructor(private _router: Router, private _ar: ActivatedRoute) { }

  ngOnInit(): void {
    this.repo_data = window.history.state;
    console.log('details: ', window.history.state);
  }

  navBack() {
    this._router.navigate(['home']);
  }
}
