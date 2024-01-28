import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { NewsService } from '../services/news.service';
import {Section} from "../../../../news/src/news/interfaces/news/section.interface";
import {News} from "../interface/news.interface";


@Component({
  selector: 'app-add-edit-news',
  templateUrl: './add-edit-news.component.html',
  styleUrls: ['./add-edit-news.component.css']
})
export class AddEditNewsComponent implements OnInit {
  new: News = {section: {
      name: "",
      icon: ""
    },
    images: [
      "",
      "",
      ""
    ],
    title: "",
    subtitle: "",
    author: "",
    date: new Date(),
    content: ""
    };
  images: string[] = [];
  sections: Section[] = [];


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newsService: NewsService
  ) {}

  get isNew(): boolean {
    return !this.route.snapshot.paramMap.has('_id');
  }

  ngOnInit(): void {
    this.obtenerSecciones();
    if (this.isNew) {
      this.addImageField();
    } else {
      const newsId = this.route.snapshot.paramMap.get('_id');
      this.newsService.getNewsById(<string>newsId).subscribe(
        (data) => {
          this.new = data;
          this.images = this.new?.images ? this.new?.images.slice() : [];
        },
        (error) => {
          console.error('Error obteniendo la noticia:', error);
        }
      );
    }
  }

  private obtenerSecciones() {
    this.newsService.getAllSections().subscribe(
      (seccion) => {
        this.sections = seccion;

        console.log(this.sections);

      },
      (error) => {
        console.error('Error obteniendo las secciones:', error);
      }
    );
  }

  guardarNoticia() {
    try {
      const newsObservable = this.isNew
        ? this.newsService.addNews(this.new)
        : this.newsService.updateNews(<string>this.new._id, this.new);

      newsObservable.subscribe(
        () => {
          this.router.navigate(['/news']);
        },
        (error) => {
          console.error(this.isNew ? 'Error al añadir la noticia: ' : 'Error al guardar los cambios: ', error);
        }
      );
    }catch (error){
      console.error('Error en guardarNoticia: ', error);
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
