import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  allRepositories: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAllRepositories();
  }

  private getAllRepositories() {
    const repositoriesURL = 'https://api.github.com/repositories';
    this.http.get(repositoriesURL).toPromise()
      .then(result => {
        this.allRepositories = result;
      })
      .catch(error => {
        console.error(error.message);
      });
  }
}

