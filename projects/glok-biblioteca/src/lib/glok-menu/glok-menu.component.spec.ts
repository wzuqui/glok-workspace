import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlokMenuComponent } from './glok-menu.component';

describe('MenuComponent', () => {
  let component: GlokMenuComponent;
  let fixture: ComponentFixture<GlokMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GlokMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GlokMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
