import { Component, Input, OnInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';

import { GlokAbasService } from '../glok-abas/glok-abas.service';
import { GlokMenuItem } from '../glok-menu/glok-menu-itens.type';

@Component({
  selector: 'glok-menu-pesquisa',
  templateUrl: './glok-menu-pesquisa.component.html',
  styleUrls: ['./glok-menu-pesquisa.component.scss'],
})
export class GlokMenuPesquisaComponent implements OnInit {
  @Input()
  public menu: GlokMenuItem[] = [];
  public itensProcessados: GlokMenuItem[] = [];
  public selectBoxDataSource: DataSource;
  public pesquisarPor: keyof GlokMenuItem = 'titulo';
  public pesquisaTempoSugestao = 200;
  public showDataBeforeSearchOption = false;

  constructor(private abas: GlokAbasService) {
    this.selectBoxDataSource = new DataSource({
      store: this.itensProcessados,
      group: 'categoria' as keyof GlokMenuItem,
    });
  }

  public ngOnInit(): void {
    let items = this.menu;

    items.forEach((item) => {
      item.items?.forEach((i) => {
        this.itensProcessados.push({
          categoria: item.categoria,
          descricao: i.descricao,
          icone: i.icone,
          rota: i.rota,
          titulo: i.titulo,
        });
      });
    });
  }

  public resetarPesquisa(e: any): void {
    e.component.reset();
  }
}
