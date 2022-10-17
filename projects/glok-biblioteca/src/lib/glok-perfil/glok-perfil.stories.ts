import {
  componentWrapperDecorator,
  moduleMetadata,
  storiesOf,
} from '@storybook/angular';

import { GlokBibliotecaModule } from '../glok-biblioteca.module';
import { GlokTemaComponent } from '../glok-tema/glok-tema.component';
import { GlokPerfilComponent } from './glok-perfil.component';

storiesOf('perfil', module)
  .addDecorator(
    moduleMetadata({
      imports: [GlokBibliotecaModule],
    })
  )
  .addDecorator(componentWrapperDecorator(GlokTemaComponent))
  .add('normal', () => ({
    component: GlokPerfilComponent,
    props: {
      imagemUsuario:
        'https://kedimanassif.com.br/wp-content/uploads/2021/01/Como-saber-se-a-pessoa-vai-ficar-careca.jpg',
      emailUsuario: 'marcelo@ravex.com',
      tabindex: 0,
      nomeUsuario: 'Marcelo',
      unidade: ' Ravex',
      temaEscuro: false,
    } as Partial<GlokPerfilComponent>,
  }));

