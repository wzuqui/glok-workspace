import { Injectable } from '@angular/core';
import { GlokMenu } from './glok-menu.type';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  public listar(): GlokMenu[] {
    const retorno = [
      {
        aberto: true,
        titulo: 'Cadastros',
        GlokMenuItens: [
          {
            icone: 'glok-icone-clientes',
            titulo: 'Clientes',
            descricao: 'Cadastro de clientes',
            rota: 'clientes',
          },
          {
            icone: 'glok-icone-produtos',
            titulo: 'Produtos',
            descricao: 'Cadastro de produtos',
            rota: 'produtos',
          },
          {
            icone: 'glok-icone-serviços',
            titulo: 'Serviços',
            descricao: 'Cadastro de serviços',
            rota: 'servicos',
          },
        ],
      },
      {
        aberto: true,
        titulo: 'Configurações',
        GlokMenuItens: [
          {
            icone: 'glok-icone-circulo',
            titulo: 'Configurações',
            descricao: 'Configurações gerais do sistema que não vai caber',
            rota: 'configurações',
          },
        ],
      },
    ];
    return retorno;
  }

  public obterPorRota(rota: string): GlokMenu {
    const retorno = this.listar().find((p) =>
      p.GlokMenuItens.find((p) => p.rota === rota)
    ) as GlokMenu;
    return retorno;
  }
  constructor() {}
}
