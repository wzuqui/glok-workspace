import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'glok-perfil',
  templateUrl: './glok-perfil.component.html',
  styleUrls: ['./glok-perfil.component.scss'],
})
export class GlokPerfilComponent implements OnInit {
  @Input()
  public emailUsuario = '';
  @Input()
  public imagemUsuario = '';

  @Input()
  public nomeUsuario = '';

  @HostBinding('tabindex')
  public tabindex = 0;

  public temaEscuro = true;

  @Input()
  public unidade = '';

  constructor() {}
  public acaoTrocar(evento: Event): void {
    evento.stopPropagation();
    const temaAtual = localStorage.getItem('data-theme');
    let novoTema = 'safe-escuro';

    if (temaAtual === 'safe-escuro') {
      novoTema = 'safe-claro';
    }
    document.documentElement.setAttribute('data-theme', novoTema);
    localStorage.setItem('data-theme', novoTema);
  }
  public direcaoInterruptor(): void {
    if (localStorage.getItem('data-theme') === null) {
      localStorage.setItem('data-theme', 'safe-claro');
    }

    if (localStorage.getItem('data-theme') === 'safe-escuro') {
      this.temaEscuro = true;
    } else {
      this.temaEscuro = false;
    }
  }
  public ngOnInit(): void {
    this.direcaoInterruptor();
  }
}
