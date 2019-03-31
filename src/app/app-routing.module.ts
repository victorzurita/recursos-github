import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersGithubComponent } from './users-github/users-github.component';
import { RepositoriesComponent } from './repositories/repositories.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersGithubComponent
  },
  {
    path: 'repositories',
    component: RepositoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
