import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlokPerfilComponent } from './glok-perfil.component';

describe('RavexPerfilComponent', () => {
  let component: GlokPerfilComponent;
  let fixture: ComponentFixture<GlokPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GlokPerfilComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GlokPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
