import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { ViewListComponent } from './view-list/view-list.component';
import { UpdateComponent } from './update/update.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookDataService } from './book-data.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddBookReactiveComponent } from './add-book-reactive/add-book-reactive.component';
import { ShortenPipe } from './shorten.pipe';
import { GithubUserComponent } from './github-user/github-user.component';
import { CovidInfoComponent } from './covid-info/covid-info.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ViewAllUserComponent } from './view-all-user/view-all-user.component';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ViewBookComponent,
    ViewListComponent,
    UpdateComponent,
    AddBookComponent,
    PageNotFoundComponent,
    AddBookReactiveComponent,
    ShortenPipe,
    GithubUserComponent,
    CovidInfoComponent,
    UserInfoComponent,
    ViewAllUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BookDataService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
