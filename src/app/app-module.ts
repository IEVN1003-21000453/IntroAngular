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

@NgModule({
  declarations: [App, HeroesList, HeroesFilterPipe, OperaDist],
  imports: [BrowserModule, AppRoutingModule, FormsModule, OperaBas],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
