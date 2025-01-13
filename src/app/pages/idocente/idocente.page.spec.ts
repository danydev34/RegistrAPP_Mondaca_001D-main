import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IdocentePage } from './idocente.page';

describe('IdocentePage', () => {
  let component: IdocentePage;
  let fixture: ComponentFixture<IdocentePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IdocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
