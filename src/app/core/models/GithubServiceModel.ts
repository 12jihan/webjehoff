export interface GithubRepo {
    repo_id: number;
    repo_owner: string;
    repo_name: string;
    repo_main_language: string | null;
    repo_languages: string | null;
    repo_size: number;
    repo_desc: string;
    repo_ssh: string;
    repo_stars: number;
    repo_watchers: number;
    repo_forks: string;
    repo_owner_id: number;
    repo_creation_date: Date;
    repo_update_date: Date;
    link_to_profile: string;
    link_to_repo: string;
}