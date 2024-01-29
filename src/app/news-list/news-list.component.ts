import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsService } from "../services/news.service";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr'; // Solo importamos ToastrService

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
})
export class NewsListComponent implements OnInit {
  newsList: any[] = [];
  mostrarConfirmacion = false;
  newsIdToDelete: string | null = null;

  constructor(
    private newsService: NewsService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllNews();
  }

  navigateToAddNews() {
    this.router.navigate(['add-news']);
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

  borrar(_id: string) {
    this.newsIdToDelete = _id;
    this.mostrarConfirmacion = true;
  }

  confirmarBorrar() {
    this.newsService.deleteNews(<string>this.newsIdToDelete).subscribe(() => {
      this.newsList = this.newsList.filter((news) => news._id !== this.newsIdToDelete);
      const deletedNewsIndex = this.newsList.findIndex(news => news._id === this.newsIdToDelete);
      if (deletedNewsIndex !== -1) {
        this.newsList[deletedNewsIndex].isDeleted = true;
      }
    });
    this.toastr.success('Noticia eliminada correctamente', 'Éxito', { timeOut: 2000 });
    this.mostrarConfirmacion = false;
    this.newsIdToDelete = null;
  }

  cancelarBorrar() {
    this.mostrarConfirmacion = false;
    this.newsIdToDelete = null;
  }

  editar(_id: string){
    this.router.navigate(['edit-news/', _id]);
  }
}
