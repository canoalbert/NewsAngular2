import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewsListComponent } from './news-list/news-list.component';
import { DeleteNewsComponent } from './delete-news/delete-news.component';
import { AddEditNewsComponent } from './add-edit-news/add-edit-news.component';
import {NgForOf} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    DeleteNewsComponent,
    AddEditNewsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgForOf, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
