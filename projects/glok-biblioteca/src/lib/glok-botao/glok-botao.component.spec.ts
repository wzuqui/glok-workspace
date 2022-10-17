import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlokBotaoComponent } from './glok-botao.component';

describe('GlokBotaoComponent', () => {
  let component: GlokBotaoComponent;
  let fixture: ComponentFixture<GlokBotaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GlokBotaoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GlokBotaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
