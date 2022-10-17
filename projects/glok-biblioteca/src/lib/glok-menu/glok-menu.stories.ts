import {
  componentWrapperDecorator,
  moduleMetadata,
  storiesOf,
} from '@storybook/angular';

import { RouterModule } from '@angular/router';
import { GlokBibliotecaModule } from '../glok-biblioteca.module';
import { GlokTema } from '../glok-tema/glok-tema';
import { GlokTemaComponent } from '../glok-tema/glok-tema.component';
import { GlokMenuComponent } from './glok-menu.component';

storiesOf('menu', module)
  .addDecorator(
    moduleMetadata({
      imports: [GlokBibliotecaModule, RouterModule.forRoot([])],
    })
  )
  .addDecorator(
    componentWrapperDecorator(GlokTemaComponent, {
      tema: GlokTema.SafeEscuro,
    } as Partial<GlokTemaComponent>)
  )
  .add('normal', () => ({
    component: GlokMenuComponent,
    props: {
      menu: [
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
            },
          ],
        },
      ],
    } as Partial<GlokMenuComponent>,
  }));
