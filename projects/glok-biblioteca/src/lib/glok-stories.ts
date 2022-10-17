import { Component } from '@angular/core';
import { ActivatedRoute, Route, RouterModule } from '@angular/router';
import { DecoratorFunction, StoryApi } from '@storybook/addons';
import {
  AngularFramework,
  componentWrapperDecorator,
  moduleMetadata,
} from '@storybook/angular';

import { GlokAbasService } from './glok-abas/glok-abas.service';
import { GlokBibliotecaModule } from './glok-biblioteca.module';

@Component({
  selector: 'mock-rota',
  template: ` {{ rota }} `,
})
class MockRotaComponent {
  public rota = 'sem rota';

  constructor(_activateRoute: ActivatedRoute) {
    if (_activateRoute.snapshot.data) {
      this.rota = _activateRoute.snapshot.data['rota'];
    }
  }
}

@Component({
  selector: 'mock-app',
  template: `
    <glok-tema>
      <ng-content></ng-content>
      <router-outlet (activate)="acaoAtivado($event)"></router-outlet>
    </glok-tema>
  `,
})
class MockAppComponent {
  constructor() {}

  public acaoAtivado(rota: any): void {}
}

export function GlokStories() {
  const retorno = moduleMetadata({
    declarations: [MockAppComponent],
    imports: [
      GlokBibliotecaModule,
      RouterModule.forRoot(
        [
          {
            path: '',
            redirectTo: 'tela-inicial',
            pathMatch: 'full',
          },
          ...[
            'clientes',
            'configuracoes',
            'produtos',
            'servicos',
            'tela-inicial',
          ].map(
            (p) =>
              ({
                path: p,
                component: MockRotaComponent,
                data: { rota: p },
                children: [
                  {
                    path: 'fechar',
                    redirectTo: '',
                  },
                ],
              } as Route)
          ),
        ],
        {
          useHash: true,
        }
      ),
    ],
    providers: [GlokAbasService],
  });
  return retorno;
}

export function GlokComponentWrapper() {
  return componentWrapperDecorator(MockAppComponent);
}
