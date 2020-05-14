import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { ViewListComponent } from './view-list/view-list.component';
import { UpdateComponent } from './update/update.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddBookReactiveComponent } from './add-book-reactive/add-book-reactive.component';


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
