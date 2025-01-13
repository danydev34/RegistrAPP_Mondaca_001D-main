import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogdocentePage } from './logdocente.page';

describe('LogdocentePage', () => {
  let component: LogdocentePage;
  let fixture: ComponentFixture<LogdocentePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LogdocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
