import {
  componentWrapperDecorator,
  moduleMetadata,
  storiesOf,
} from '@storybook/angular';

import { GlokBibliotecaModule } from '../glok-biblioteca.module';
import { GlokTemaComponent } from '../glok-tema/glok-tema.component';
import { GlokBotaoComponent } from './glok-botao.component';

storiesOf('botao', module)
  .addDecorator(
    moduleMetadata({
      imports: [GlokBibliotecaModule],
    })
  )
  .addDecorator(componentWrapperDecorator(GlokTemaComponent))
  .add('normal', () => ({
    component: GlokBotaoComponent,
    props: {
      texto: 'Normal',
    },
  }));
