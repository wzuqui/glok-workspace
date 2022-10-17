import { storiesOf } from '@storybook/angular';

import { GlokComponentWrapper, GlokStories } from '../glok-stories';
import { GlokCabecalhoComponent } from './glok-cabecalho.component';

storiesOf('cabecalho', module)
  .addDecorator(GlokStories())
  .addDecorator(GlokComponentWrapper())
  .add('cabeçalho', () => ({
    component: GlokCabecalhoComponent,
    props: {
      emailUsuario: 'ravex@gmail.com.br',
      imagemUsuario:
        'https://kedimanassif.com.br/wp-content/uploads/2021/01/Como-saber-se-a-pessoa-vai-ficar-careca.jpg',
      logoCabecalho: 'logo_pequena_dark_1.svg',
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
              rota: 'configuracoes',
            },
          ],
        },
      ],
      abas: [
        {
          ativa: true,
          fixada: true,
          icone: 'glok-icone-tela-principal',
          titulo: '',
          botaoFechar: false,
          rota: 'tela-inicial',
        },
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
          rota: 'servicos',
        },
      ],
      nomeEmpresa: 'Glok',
      nomeUsuario: 'Monster',
    } as Partial<GlokCabecalhoComponent>,
  }));
