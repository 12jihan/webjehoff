import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubRepo } from '../../models/GithubServiceModel';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private _http: HttpClient) { }

  getRepos() {
    let repoList: {}[] = [];

    this._http.get<GithubRepo[]>('https://api.github.com/users/12jihan/repos').subscribe((repos: any) => {
      // Taking exactly what I need from this:
      repos.forEach((repo: any) => {
        const repo_obj: GithubRepo = {
          repo_id: repo.id,
          repo_owner: repo.owner.login,
          repo_name: repo.name,
          repo_main_language: repo.language,
          repo_languages: repo.language,
          repo_size: repo.size,
          repo_desc: repo.description,
          repo_ssh: repo.ssh_url,
          repo_stars: repo.stargazers_count, 
          repo_watchers: repo.watchers_count,
          repo_forks: repo.forks,
          repo_owner_id: repo.owner.id,
          repo_creation_date: repo.created_at,
          repo_update_date: repo.updated_at,
          link_to_profile: repo.owner.html_url,
          link_to_repo: repo.html_url 
        };
        repoList.push(repo_obj)
      });

      // Return the modified list of repos:
      return repoList;
    });
  }
}
