import { Component, HostBinding, HostListener, Input } from '@angular/core';

import { GlokMenu } from './glok-menu.type';

@Component({
  selector: 'glok-menu',
  templateUrl: './glok-menu.component.html',
  styleUrls: ['./glok-menu.component.scss'],
})
export class GlokMenuComponent {
  @Input() public menu: GlokMenu[] = [];
  public iconeMenu = 'glok-icone-menu';

  @HostListener('tabindex', ['$event'])
  public tabIndexado() {
    this.aberto = false;
  }

  @HostBinding('class.aberto')
  public aberto = false;

  @HostListener('blur', ['$event'])
  public acaoObscurecer() {
    this.aberto = false;
    this.iconeMenu = 'glok-icone-menu';
  }

  constructor() {}

  public abrirNovaJanela(): void {
    this.iconeMenu = 'glok-icone-menu';
    this.aberto = false;
  }

  public alterarEstadoMenu() {
    if (this.iconeMenu === 'glok-icone-menu') {
      this.iconeMenu = 'glok-icone-fechar-menu';
      this.aberto = true;
      return;
    }

    if (this.iconeMenu === 'glok-icone-fechar-menu') {
      this.iconeMenu = 'glok-icone-menu';
      this.aberto = false;
      return;
    }
  }
}
