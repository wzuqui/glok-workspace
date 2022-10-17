import { Component, Input, OnInit } from '@angular/core';
import { GlokPainel } from './glok-painel.type';
@Component({
  selector: 'glok-lista-paineis-atalho',
  templateUrl: './glok-lista-paineis-atalho.component.html',
  styleUrls: ['./glok-lista-paineis-atalho.component.scss'],
})
export class GlokListaPaineisAtalhoComponent implements OnInit {
  @Input() public paineis: GlokPainel[] = [];
  @Input() public tituloLista = '';

  constructor() {}

  public ngOnInit(): void {}
}
