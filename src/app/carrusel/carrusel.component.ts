import { Component } from '@angular/core';
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarruselComponent {
  constructor(config: NgbCarouselConfig) {

    config.interval = 1000;
    config.wrap = true;
    config.keyboard = false;
  }

  ngOnInit() {
    // Puedes agregar lógica adicional aquí si es necesario
  }
}
