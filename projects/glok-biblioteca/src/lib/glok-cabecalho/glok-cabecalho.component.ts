import { Component, Input, OnInit } from '@angular/core';
import { GlokAba } from '../glok-abas/glok-aba.type';
import { GlokMenu } from '../glok-menu/glok-menu.type';

@Component({
  selector: 'glok-cabecalho',
  templateUrl: './glok-cabecalho.component.html',
  styleUrls: ['./glok-cabecalho.component.scss'],
})
export class GlokCabecalhoComponent implements OnInit {
  @Input() public abas: GlokAba[] = [];
  @Input() public emailUsuario = '';
  @Input() public imagemUsuario = '';
  @Input() public logoCabecalho = '';
  @Input() public menu: GlokMenu[] = [];
  @Input() public nomeEmpresa = '';
  @Input() public nomeUsuario = '';

  constructor() {}

  public clicouLogo(): void {}

  public ngOnInit(): void {}
}
