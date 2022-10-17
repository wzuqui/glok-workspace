import {
  componentWrapperDecorator,
  moduleMetadata,
  storiesOf,
} from '@storybook/angular';
import { GlokBibliotecaModule } from '../glok-biblioteca.module';
import { GlokTema } from '../glok-tema/glok-tema';
import { GlokTemaComponent } from '../glok-tema/glok-tema.component';
import { GlokAbasComponent } from './glok-abas.component';

storiesOf('abas', module)
  .addDecorator(
    moduleMetadata({
      imports: [GlokBibliotecaModule],
    })
  )
  .addDecorator(
    componentWrapperDecorator(GlokTemaComponent, {
      tema: GlokTema.SafeClaro,
    } as Partial<GlokTemaComponent>)
  )
  .add('normal', () => ({
    component: GlokAbasComponent,
    props: {
      abas: [
        {
          ativa: false,
          fixada: false,
          icone: 'glok-icone-clientes',
          titulo: 'Clientes',
          botaoFechar: true,
          rota: 'clientes',
        },
        {
          ativa: false,
          fixada: false,
          icone: 'glok-icone-produtos',
          titulo: 'Produtos',
          botaoFechar: true,
          rota: 'produtos',
        },
        {
          ativa: false,
          fixada: false,
          icone: 'glok-icone-serviços',
          titulo: 'Serviços',
          botaoFechar: true,
          rota: 'serviços',
        },
      ],
    } as Partial<GlokAbasComponent>,
  }));
