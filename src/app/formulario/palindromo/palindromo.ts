import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-palindromo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './palindromo.html',
  styleUrl: './palindromo.css'
})

export class Palindromo {

  texto: string = '';

  vocales: number = 0;
  consonantes: number = 0;
  palindromo: string = '';

  posicion: number = 0;
  izquierda: number = 0;
  derecha: number = 0;


  analizarFrase(): void {

    this.vocales = 0;
    this.consonantes = 0;
    this.posicion = 0;

    if (this.texto !== '') {

      while (this.texto[this.posicion] !== undefined) {

        if (this.texto[this.posicion] === 'a') {
          this.vocales = this.vocales + 1;
        } else if (this.texto[this.posicion] === 'e') {
          this.vocales = this.vocales + 1;
        } else if (this.texto[this.posicion] === 'i') {
          this.vocales = this.vocales + 1;
        } else if (this.texto[this.posicion] === 'o') {
          this.vocales = this.vocales + 1;
        } else if (this.texto[this.posicion] === 'u') {
          this.vocales = this.vocales + 1;
        } else if (this.texto[this.posicion] === 'b') {
          this.consonantes = this.consonantes + 1;
        } else if (this.texto[this.posicion] === 'c') {
          this.consonantes = this.consonantes + 1;
        } else if (this.texto[this.posicion] === 'd') {
          this.consonantes = this.consonantes + 1;
        } else if (this.texto[this.posicion] === 'f') {
          this.consonantes = this.consonantes + 1;
        } else if (this.texto[this.posicion] === 'g') {
          this.consonantes = this.consonantes + 1;
        } else if (this.texto[this.posicion] === 'h') {
          this.consonantes = this.consonantes + 1;
        } else if (this.texto[this.posicion] === 'j') {
          this.consonantes = this.consonantes + 1;
        } else if (this.texto[this.posicion] === 'k') {
          this.consonantes = this.consonantes + 1;
        } else if (this.texto[this.posicion] === 'l') {
          this.consonantes = this.consonantes + 1;
        } else if (this.texto[this.posicion] === 'm') {
          this.consonantes = this.consonantes + 1;
        } else if (this.texto[this.posicion] === 'n') {
          this.consonantes = this.consonantes + 1;
        } else if (this.texto[this.posicion] === 'ñ') {
          this.consonantes = this.consonantes + 1;
        } else if (this.texto[this.posicion] === 'p') {
          this.consonantes = this.consonantes + 1;
        } else if (this.texto[this.posicion] === 'q') {
          this.consonantes = this.consonantes + 1;
        } else if (this.texto[this.posicion] === 'r') {
          this.consonantes = this.consonantes + 1;
        } else if (this.texto[this.posicion] === 's') {
          this.consonantes = this.consonantes + 1;
        } else if (this.texto[this.posicion] === 't') {
          this.consonantes = this.consonantes + 1;
        } else if (this.texto[this.posicion] === 'v') {
          this.consonantes = this.consonantes + 1;
        } else if (this.texto[this.posicion] === 'w') {
          this.consonantes = this.consonantes + 1;
        } else if (this.texto[this.posicion] === 'x') {
          this.consonantes = this.consonantes + 1;
        } else if (this.texto[this.posicion] === 'y') {
          this.consonantes = this.consonantes + 1;
        } else if (this.texto[this.posicion] === 'z') {
          this.consonantes = this.consonantes + 1;
        }

        this.posicion = this.posicion + 1;
      }


      this.izquierda = 0;
      this.derecha = this.posicion - 1;
      this.palindromo = 'Sí es palíndromo';

      while (this.izquierda < this.derecha) {
        if (this.texto[this.izquierda] === ' ') {
          this.izquierda = this.izquierda + 1;
        } else if (this.texto[this.derecha] === ' ') {
          this.derecha = this.derecha - 1;
        } else if (
          this.texto[this.izquierda] !== this.texto[this.derecha]
        ) {
          this.palindromo = 'No es palíndromo';
          this.izquierda = this.derecha;
        } else {
          this.izquierda = this.izquierda + 1;
          this.derecha = this.derecha - 1;
        }
      }

    } else {
      this.vocales = 0;
      this.consonantes = 0;
      this.palindromo = '';

    }
  }
}