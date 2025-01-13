import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogalumnoPage } from './logalumno.page';

describe('LogalumnoPage', () => {
  let component: LogalumnoPage;
  let fixture: ComponentFixture<LogalumnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LogalumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
