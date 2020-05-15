import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { ViewListComponent } from './view-list/view-list.component';
import { UpdateComponent } from './update/update.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddBookReactiveComponent } from './add-book-reactive/add-book-reactive.component';
import { GithubUserComponent } from './github-user/github-user.component';
import { CovidInfoComponent } from './covid-info/covid-info.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ViewAllUserComponent } from './view-all-user/view-all-user.component';


const routes: Routes = [
  {
    path:'add', component:AddBookComponent
  },
  {
    path:'viewall', component:ViewListComponent
  },
  {
    path:'update/:id', component:UpdateComponent
  },
  {
    path:'add-book-reactive', component:AddBookReactiveComponent
  },
  {
    path:'github-info',component:GithubUserComponent
  },
  {
    path:'covid-info',component:CovidInfoComponent
  },
  {
    path:"user-api",component:UserInfoComponent
  },
  {
    path:"user-view-all",component:ViewAllUserComponent
  },
  {
    path:'not-found',component:PageNotFoundComponent
  },
  {
    path:'**',redirectTo:'/not-found'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
