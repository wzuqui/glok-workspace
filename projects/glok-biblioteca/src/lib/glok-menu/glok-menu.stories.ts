import { Component, ElementRef, HostBinding } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import {
  componentWrapperDecorator,
  moduleMetadata,
  storiesOf
} from '@storybook/angular';
import { GlokBibliotecaModule } from '../glok-biblioteca.module';
import { GlokMenuComponent } from './glok-menu.component';

@Component({
  selector: 'mock-app',
  template: `
    <h1>Mock App</h1>
    <ng-content></ng-content>
    <router-outlet></router-outlet>
  `,
})
class MockAppComponent {
  @HostBinding('tabindex')
  public tabindex = 0;
}

@Component({
  selector: 'mock-rota',
  template: '{{rota}}',
})
class MockRotaComponent {
  public rota: string = 'sem rota';

  constructor(_activatedRoute: ActivatedRoute) {
    this.rota = _activatedRoute.snapshot.data['rota'];
  }
}

const rotas = ['pessoas', 'veiculos', 'equipamentos', 'historico'].map(
  (rota) =>
    ({
      path: rota,
      data: {
        rota: rota
      },
      component: MockRotaComponent,
    } as Route)
);

storiesOf('menu', module)
  .addDecorator(
    moduleMetadata({
      declarations: [MockAppComponent],
      imports: [
        GlokBibliotecaModule,
        RouterModule.forRoot([
          ...rotas,
          {
            path: '**',
            pathMatch: 'full',
            redirectTo: '',
          },
        ], {
          // enableTracing: true
        }),
      ],
    })
  )
  .addDecorator(componentWrapperDecorator(MockAppComponent))
  .add('normal', () => ({
    component: GlokMenuComponent,
    props: {
      menu: [
        {
          titulo: 'Cadastros',
          itens: [
            {
              titulo: 'Pessoas',
              rota: 'pessoas',
            },
            {
              titulo: 'Veículos',
              rota: 'veiculos',
            },
            {
              titulo: 'Equipamentos',
              rota: 'equipamentos',
            },
          ],
        },
        {
          titulo: 'Relatórios',
          itens: [{ titulo: 'Histórico', rota: 'historico' }],
        },
      ],
    } as Partial<GlokMenuComponent>,
  }));
