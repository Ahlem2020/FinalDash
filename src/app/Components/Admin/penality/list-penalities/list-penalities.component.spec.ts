import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPenalitiesComponent } from './list-penalities.component';

describe('ListPenalitiesComponent', () => {
  let component: ListPenalitiesComponent;
  let fixture: ComponentFixture<ListPenalitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPenalitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPenalitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
