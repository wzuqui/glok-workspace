import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'glok-botao',
  templateUrl: './glok-botao.component.html',
  styleUrls: ['./glok-botao.component.scss'],
})
export class GlokBotaoComponent implements OnInit {
  @Input() public icone = '';
  @Input() public texto = '';
  @Output() public clicou = new EventEmitter<Event>();

  public ngOnInit(): void {}

  @HostListener('click', ['$event'])
  public acaoClicou(evento: Event) {
    this.clicou.emit(evento);
  }
}
