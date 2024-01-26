import { Component, OnInit } from '@angular/core';
import {NewsService} from "../services/news.service";
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],

})
export class NewsListComponent implements OnInit {
  newsList: any[] = [];



  constructor(private newsService: NewsService) {
  }

  ngOnInit(): void {
    this.getAllNews();
  }

  getAllNews() {
    this.newsService.getAllNews().subscribe(
      (data) => {
        this.newsList = data.map(news => ({
          ...news,
          dateFormatted: this.newsService.formatDate(new Date(news.date))
        }));
      },
      (error) => {
        console.error('Error al obtener la lista de noticias:', error);
        console.log('Código de estado:', error.status);
      }
    );
  }

  borar(_id: string) {
    this.newsService.deleteNews(_id).subscribe(() => {
      this.newsList = this.newsList.filter((news) => news._id !== _id);
    });
    console.log("La noticia ha sido borrada");

  }
}


