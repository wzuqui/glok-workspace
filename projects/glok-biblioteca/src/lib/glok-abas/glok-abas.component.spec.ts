import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GlokAbasComponent } from './glok-abas.component';

describe('GlokAbasComponent', () => {
  let component: GlokAbasComponent;
  let fixture: ComponentFixture<GlokAbasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GlokAbasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GlokAbasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
