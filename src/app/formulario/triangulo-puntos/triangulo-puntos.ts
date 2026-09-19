import { Component } from '@angular/core';

@Component({
  selector: 'app-triangulo-puntos',
  standalone: false,
  styleUrl: './triangulo-puntos.css',
  templateUrl: './triangulo-puntos.html'
})

export class TrianguloPuntos {

  x1: number = 0;
  y1: number = 0;

  x2: number = 0;
  y2: number = 0;

  x3: number = 0;
  y3: number = 0;

  formula: number = 0;
  area: number = 0;
  resultado: string = '';

  analizarPuntos(): void {

    this.formula =
      this.x1 * (this.y2 - this.y3) +
      this.x2 * (this.y3 - this.y1) +
      this.x3 * (this.y1 - this.y2);

    if (this.formula == 0) {

      this.area = 0;

      this.resultado =
        'Los tres puntos no forman un triángulo porque son colineales.';

    } else {

      if (this.formula < 0) {
        this.formula = this.formula * -1;
      }

      this.area = this.formula / 2;

      this.resultado =
        'Los puntos forman un triángulo.';
    }
  }
}