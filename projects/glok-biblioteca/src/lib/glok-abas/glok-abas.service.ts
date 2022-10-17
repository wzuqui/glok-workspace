import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { GlokAba } from './glok-aba.type';

@Injectable({
  providedIn: 'root',
})
export class GlokAbasService {
  constructor(private _router: Router) {}

  public assinar(
    abas: GlokAba[],
    obterPorRota: (rota: string) => GlokAba
  ): void {
    console.log('ta ouvindo');

    let ativo = '';
    this._router.events.subscribe((evento) => {
      if (evento instanceof NavigationEnd) {
        const [_, rota] = evento.url.split('/');
        const item = obterPorRota(rota);
        const ehFechar = evento.url.includes('fechar');
        if (rota === '') {
          return;
        }
        if (!ehFechar) {
          ativo = evento.url;
        }
        if (item) {
          const jaExiste = abas.find((p) => p.rota === item.rota);
          if (jaExiste) {
            const ehFechar = evento.url.includes('fechar');
            if (ehFechar) {
              try {
                const indice = abas.indexOf(jaExiste);
                abas.splice(indice, 1);

                if (evento.url.includes(ativo)) {
                  const proximo = abas[indice];
                  if (proximo) {
                    this._router.navigate([proximo.rota]);
                  }
                } else {
                  this._router.navigate([ativo]);
                }
              } catch {
                const ultimo = abas[abas.length];
                if (ultimo) {
                  this._router.navigate([ultimo.rota]);
                }
              }
            }
            return;
          }
          abas.push({ ...item, fixada: false });
        }
      }
    });
  }
}
