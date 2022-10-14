import { Component, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

type Menu = {
  titulo: string;
  rota?: string;
  itens?: Menu[];
};

@Component({
  selector: 'lib-glok-menu',
  templateUrl: './glok-menu.component.html',
  styleUrls: ['./glok-menu.component.scss']
})
export class GlokMenuComponent {
  @Input()
  public menu: Menu[] = [];

  @HostBinding('tabindex')
  public tabindex = 0;

  public acaoClick() {
    (document.querySelector('[tabindex]') as HTMLElement).focus();
  }
}
