import { GlokMenuItem } from './glok-menu-itens.type';

export type GlokMenu = {
  aberto: boolean;
  titulo: string;
  GlokMenuItens: GlokMenuItem[];
};
