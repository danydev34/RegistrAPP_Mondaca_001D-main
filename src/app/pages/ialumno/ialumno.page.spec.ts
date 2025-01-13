import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IalumnoPage } from './ialumno.page';

describe('IalumnoPage', () => {
  let component: IalumnoPage;
  let fixture: ComponentFixture<IalumnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IalumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
