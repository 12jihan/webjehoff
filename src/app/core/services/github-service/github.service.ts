import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubRepo } from '../../models/GithubServiceModel';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private _http: HttpClient) { }

  // Create the request that I'm looking to make:
  /**
   * @params None Whats so ever ;)
   * @return GitHubRepo[]
   */
  getRepos() {
    // Defining the type of array that I want to make:
    let repoList: GithubRepo[] = [];
    this._http.get<any>('https://api.github.com/users/12jihan/repos')
  }
}
