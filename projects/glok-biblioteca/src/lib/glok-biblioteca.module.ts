import { NgModule } from '@angular/core';
import { GlokMenuComponent } from './glok-menu/glok-menu.component';
import { GlokBotaoComponent } from './glok-botao/glok-botao.component';

@NgModule({
  declarations: [GlokMenuComponent, GlokBotaoComponent],
  imports: [],
  exports: [GlokMenuComponent],
})
export class GlokBibliotecaModule {}
