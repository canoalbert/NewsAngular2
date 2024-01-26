import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsListComponent } from './news-list/news-list.component';
import { AddEditNewsComponent } from './add-edit-news/add-edit-news.component';
import { DeleteNewsComponent } from './delete-news/delete-news.component';

const routes: Routes = [
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: 'news', component: NewsListComponent },
  { path: 'add-news', component: AddEditNewsComponent },
  { path: 'edit-news/:id', component: AddEditNewsComponent },
  { path: 'delete-news/:id', component: DeleteNewsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
