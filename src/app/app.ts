import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  title:string = 'Emiliano Rodriguez Medina '

  duplicarnumero(a:number):number{
    return a*2
  }

  pelicula={
    titulo: 'Spider-Man',
    fechaLanzamiento: new Date(),
    precio: 250
  }
}
