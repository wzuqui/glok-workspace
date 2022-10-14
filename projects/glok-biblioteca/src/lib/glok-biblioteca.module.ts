import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { GlokBotaoComponent } from './glok-botao/glok-botao.component';
import { GlokMenuComponent } from './glok-menu/glok-menu.component';

@NgModule({
  declarations: [GlokMenuComponent, GlokBotaoComponent],
  imports: [BrowserModule, RouterModule],
  exports: [GlokMenuComponent],
})
export class GlokBibliotecaModule {}
