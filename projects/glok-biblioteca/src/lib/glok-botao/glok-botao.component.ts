import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'glok-botao',
  templateUrl: './glok-botao.component.html',
  styleUrls: ['./glok-botao.component.scss']
})
export class GlokBotaoComponent implements OnInit {
  @Input() public texto: string = '';
  @Output() public clicou = new EventEmitter<Event>();

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('click', ['$event'])
  public acaoClicou(evento: Event) {
    this.clicou.emit(evento);
  }


}
