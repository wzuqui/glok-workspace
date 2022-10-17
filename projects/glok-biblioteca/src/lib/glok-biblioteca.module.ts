import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DxSelectBoxModule, DxSwitchModule } from 'devextreme-angular';
import { GlokAbasComponent } from './glok-abas/glok-abas.component';
import { GlokBotaoComponent } from './glok-botao/glok-botao.component';
import { GlokCabecalhoComponent } from './glok-cabecalho/glok-cabecalho.component';
import { GlokListaPaineisAtalhoComponent } from './glok-lista-paineis-atalho/glok-lista-paineis-atalho.component';
import { GlokMenuPesquisaComponent } from './glok-menu-pesquisa/glok-menu-pesquisa.component';
import { GlokMenuComponent } from './glok-menu/glok-menu.component';
import { GlokPerfilComponent } from './glok-perfil/glok-perfil.component';
import { GlokTemaComponent } from './glok-tema/glok-tema.component';

@NgModule({
  declarations: [
    GlokAbasComponent,
    GlokBotaoComponent,
    GlokCabecalhoComponent,
    GlokListaPaineisAtalhoComponent,
    GlokMenuComponent,
    GlokMenuPesquisaComponent,
    GlokPerfilComponent,
    GlokTemaComponent,
  ],
  exports: [
    GlokAbasComponent,
    GlokBotaoComponent,
    GlokCabecalhoComponent,
    GlokListaPaineisAtalhoComponent,
    GlokMenuComponent,
    GlokMenuPesquisaComponent,
    GlokPerfilComponent,
    GlokTemaComponent,
  ],
  imports: [CommonModule, DxSwitchModule, DxSelectBoxModule, RouterModule],
})
export class GlokBibliotecaModule {}
