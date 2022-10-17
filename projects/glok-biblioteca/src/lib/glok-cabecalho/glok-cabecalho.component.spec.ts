import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlokCabecalhoComponent } from './glok-cabecalho.component';

describe('GlokCabecalhoComponent', () => {
  let component: GlokCabecalhoComponent;
  let fixture: ComponentFixture<GlokCabecalhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GlokCabecalhoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GlokCabecalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
