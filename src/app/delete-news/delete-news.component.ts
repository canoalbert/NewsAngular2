import { Component } from '@angular/core';
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-delete-news',
  templateUrl: './delete-news.component.html',
  styleUrls: ['./delete-news.component.css'],
  providers: [NgbCarouselConfig]
})
export class DeleteNewsComponent {
  constructor(config: NgbCarouselConfig) {

    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
  }

  ngOnInit() {
    // Puedes agregar lógica adicional aquí si es necesario
  }
}
