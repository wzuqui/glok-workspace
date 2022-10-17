export type GlokMenuItem = {
  aberto?: boolean;
  categoria?: string;
  descricao: string;
  icone: string;
  items?: GlokMenuItem[];
  rota: string;
  titulo: string;
};
