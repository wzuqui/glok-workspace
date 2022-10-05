import { moduleMetadata, storiesOf } from '@storybook/angular';
import { GlokBibliotecaModule } from '../glok-biblioteca.module';
import { GlokMenuComponent } from './glok-menu.component';

storiesOf('menu', module)
  .addDecorator(
    moduleMetadata({
      imports: [GlokBibliotecaModule],
    })
  )
  .add('normal', () => ({
    component: GlokMenuComponent,
    props: {
      menu: [],
    },
  }));
