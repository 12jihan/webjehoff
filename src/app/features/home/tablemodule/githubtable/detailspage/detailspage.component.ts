import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubRepo } from 'src/app/core/models/GithubServiceModel';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { animate, animateChild, group, query, style, trigger } from '@angular/animations';

@Component({
  selector: 'jeh-detailspage',
  templateUrl: './detailspage.component.html',
  styleUrl: './detailspage.component.scss',
  animations: []
})
export class DetailspageComponent {

  repo_data: GithubRepo | undefined;
  faChevronLeft = faChevronCircleLeft;

  constructor(private _router: Router, private _ar: ActivatedRoute) { }

  ngOnInit(): void {
    this.repo_data = window.history.state;
    console.log('details: ', window.history.state);
  }

  navBack() {
    this._router.navigate(['home']);
  }
}
