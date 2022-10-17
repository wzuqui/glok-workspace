import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlokListaPaineisAtalhoComponent } from './glok-lista-paineis-atalho.component';

describe('RavexListaPaineisAtalhoComponent', () => {
  let component: GlokListaPaineisAtalhoComponent;
  let fixture: ComponentFixture<GlokListaPaineisAtalhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GlokListaPaineisAtalhoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GlokListaPaineisAtalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
