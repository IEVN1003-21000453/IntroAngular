import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.html',
  styleUrl: './heroes-list.css',
})
export class HeroesList {

  imageWidth:number=40;
  imageMargin:number=2;
  muestraImagen:boolean=true;
  listFilter:string='';
  showImage():void{
    this.muestraImagen=!this.muestraImagen;
  };

  heroes:any[]=[

    {
      imagen:"https://dragonball-api.com/characters/goku_normal.webp",
      nombre: 'Goku',
      descripcion: 'kame hame Ha',
      race: 'Saiyan',
      ki: 9000
    },

    {
      imagen:"https://dragonball-api.com/characters/gohan.webp",
      nombre: 'Gohan',
      descripcion: 'Masenko',
      race: 'Saiyan',
      ki: 8000
    },

    {
      imagen:"https://dragonball-api.com/characters/Krilin_Universo7.webp",
      nombre: 'Krilin',
      descripcion: 'Kienzan',
      race: 'Human',
      ki: 3000
    },

    {
      imagen:"https://dragonball-api.com/characters/Androide_16.webp",
      nombre: 'Android 17',
      descripcion: 'Barrier',
      race: 'Android',
      ki: 5000
    }


  ]

}
