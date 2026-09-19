import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { UpperCasePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing-module';

import { App } from './app';

import { FormsModule } from '@angular/forms';

import { HeroesList } from './heroes/heroes-list/heroes-list';

import { HeroesFilterPipe } from './heroes/heroes-filter-pipe';

import { OperaBas } from './formulario/opera-bas/opera-bas';

import { OperaDist } from './formulario/opera-dist/opera-dist';

import { Figuras } from './formulario/figuras/figuras';

import { Palindromo } from './formulario/palindromo/palindromo';
import { TrianguloPuntos } from './formulario/triangulo-puntos/triangulo-puntos';
import { Usuario } from './formulario/usuario/usuario';

@NgModule({
  declarations: [App, HeroesList, HeroesFilterPipe, OperaDist, Figuras, TrianguloPuntos, Usuario],

  imports: [BrowserModule, AppRoutingModule, FormsModule, OperaBas, Palindromo],

  providers: [provideBrowserGlobalErrorListeners()],

  bootstrap: [App],
})
export class AppModule {}
