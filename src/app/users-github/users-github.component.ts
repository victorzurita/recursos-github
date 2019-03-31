import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users-github',
  templateUrl: './users-github.component.html',
  styleUrls: ['./users-github.component.css']
})
export class UsersGithubComponent implements OnInit {
  usersGithub: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getUsersFromGithub();
  }

  private getUsersFromGithub() {
    const usersURL = 'https://api.github.com/users';

    this.http.get(usersURL).toPromise()
      .then(result => {
        this.usersGithub = result;
        console.log(this.usersGithub);
      })
      .catch(error => {
        console.error(error.message);
      });
  }
}
