import { Component, Input, OnInit } from '@angular/core';

import { GlokAba } from './glok-aba.type';

@Component({
  selector: 'glok-abas',
  templateUrl: './glok-abas.component.html',
  styleUrls: ['./glok-abas.component.scss'],
})
export class GlokAbasComponent implements OnInit {
  // @Input() public items: GlokAba[] = [];

  @Input()
  public itens: GlokAba[] = [];

  constructor() {}

  public ngOnInit(): void {}
}
