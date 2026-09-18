import { Component } from '@angular/core';

@Component({
  selector: 'app-figuras',
  standalone: false,
  styleUrl: './figuras.css',
  templateUrl: './figuras.html',
})
export class Figuras {

  base: number = 0;
  altura: number = 0;
  figura: number = 1;
  area: number = 0;

  areaRectangulo(): number {
    return this.base * this.altura;
  }

  areaCuadrado(): number {
    return this.base * this.base;
  }

  areaTriangulo(): number {
    return (this.base * this.altura) / 2;
  }

  areaCirculo(): number {
    return 3.1416 * this.base * this.base;
  }

  areaRomboide(): number {
    return (this.base * this.altura) / 2;
  }

  calcularArea(): void {

    if (this.figura == 1) {
      this.area = this.areaRectangulo();
    }

    if (this.figura == 2) {
      this.area = this.areaCuadrado();
    }

    if (this.figura == 3) {
      this.area = this.areaTriangulo();
    }

    if (this.figura == 4) {
      this.area = this.areaCirculo();
    }

    if (this.figura == 5) {
      this.area = this.areaRomboide();
    }

  }

}