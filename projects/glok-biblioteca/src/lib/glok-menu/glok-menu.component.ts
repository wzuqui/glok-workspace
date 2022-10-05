import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'lib-glok-menu',
  templateUrl: './glok-menu.component.html',
  styleUrls: ['./glok-menu.component.scss']
})
export class GlokMenuComponent implements OnInit {
  @HostBinding('tabindex')
  public tabindex = 0;

  @HostBinding("class.aberto")
  public aberto = false;

  constructor() { }

  public ngOnInit(): void {
  }

  @HostListener("blur", ["$event"])
  public acaoObscurecer(evento: Event) {
    this.aberto = false;
  }

  public acaoMenuItemClicou(evento: Event) {
    this.aberto = false;
    console.log(evento.currentTarget);
  }
}
