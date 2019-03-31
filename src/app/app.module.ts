import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersGithubComponent } from './users-github/users-github.component';
import {HttpClientModule} from '@angular/common/http';
import { RepositoriesComponent } from './repositories/repositories.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersGithubComponent,
    RepositoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
