import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-add-edit-news',
  templateUrl: './add-edit-news.component.html',
  styleUrls: ['./add-edit-news.component.css']
})
export class AddEditNewsComponent implements OnInit {
  news: any = {};
  images: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newsService: NewsService
  ) {this.news = {};
    this.news.section = {};}

  get isNew(): boolean {
    return !this.route.snapshot.paramMap.has('_id');
  }

  ngOnInit(): void {
    if (this.isNew) {
      this.addImageField();
    } else {
      const newsId = this.route.snapshot.paramMap.get('_id');
      this.newsService.getNewsById(<string>newsId).subscribe(
        (data) => {
          this.news = data;
          this.images = this.news.images ? this.news.images.slice() : [];
        },
        (error) => {
          console.error('Error obteniendo la noticia:', error);
        }
      );
    }
  }

  guardarNoticia() {
    try {
      const newsObservable = this.isNew
        ? this.newsService.addNews(this.news)
        : this.newsService.updateNews(this.news._id, this.news);

      newsObservable.subscribe(
        () => {
          this.router.navigate(['/news']);
        },
        (error) => {
          console.error(this.isNew ? 'Error al añadir la noticia: ' : 'Error al guardar los cambios: ', error);
        }
      );
    }catch (error){
      console.error('Error en guardarNoticia:', error);
    }
  }

  addImageField(): void {
    this.images.push('');
  }

  removeImageField(index: number): void {
    this.images.splice(index, 1);
  }

  submitForm(): void {
  }
}
