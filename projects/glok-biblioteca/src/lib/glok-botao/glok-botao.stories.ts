import { storiesOf } from "@storybook/angular";
import { GlokBotaoComponent } from "./glok-botao.component";

storiesOf('botao', module)
  .add('normal', () => ({
    component: GlokBotaoComponent,
    props: {
      texto: 'Olá mundo'
    }
  }))
