import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnComponent } from './personn.component';

describe('PersonnComponent', () => {
  let component: PersonnComponent;
  let fixture: ComponentFixture<PersonnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
