import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllmoduleComponent } from './show-allmodule.component';

describe('ShowAllmoduleComponent', () => {
  let component: ShowAllmoduleComponent;
  let fixture: ComponentFixture<ShowAllmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllmoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
