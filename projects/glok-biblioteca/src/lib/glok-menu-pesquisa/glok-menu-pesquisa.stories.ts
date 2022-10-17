import {
  componentWrapperDecorator,
  moduleMetadata,
  storiesOf,
} from '@storybook/angular';
import { DxListModule, DxSelectBoxModule } from 'devextreme-angular';
import { GlokBibliotecaModule } from '../glok-biblioteca.module';
import { GlokTemaComponent } from '../glok-tema/glok-tema.component';
import { GlokMenuPesquisaComponent } from './glok-menu-pesquisa.component';

storiesOf('pesquisa', module)
  .addDecorator(
    moduleMetadata({
      imports: [GlokBibliotecaModule, DxSelectBoxModule, DxListModule],
    })
  )
  .addDecorator(componentWrapperDecorator(GlokTemaComponent))
  .add('normal', () => ({
    component: GlokMenuPesquisaComponent,
    props: {
      menu: [
        {
          categoria: 'Cadastros',
          icone: '',
          titulo: '',
          items: [
            {
              icone: 'glok-icone-clientes',
              titulo: 'Clientes',
              descricao: 'Cadastro de clientes',
            },
            {
              icone: 'glok-icone-produtos',
              titulo: 'Produtos',
              descricao: 'Cadastro de Produtos',
            },
          ],
        },
      ],
    } as Partial<GlokMenuPesquisaComponent>,
  }));
