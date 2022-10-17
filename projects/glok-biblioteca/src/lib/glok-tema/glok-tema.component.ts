import { Component, HostBinding, Input } from '@angular/core';

import { GlokTema } from './glok-tema';

@Component({
  selector: 'glok-tema',
  templateUrl: './glok-tema.component.html',
  styleUrls: ['./glok-tema.component.scss'],
})
export class GlokTemaComponent {
  @Input('tema')
  public tema?: GlokTema;

  @HostBinding('class')
  public get classAttribute() {
    return 'dx-swatch-' + this._tema();
  }

  @HostBinding('attr.tema')
  public get temaAttribute() {
    return this._tema();
  }

  private _tema(): GlokTema {
    return (
      this.tema ??
      (localStorage.getItem('data-theme') as GlokTema) ??
      GlokTema.SafeClaro
    );
  }
}
