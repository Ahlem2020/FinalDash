import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllCondidComponent } from './show-all-condid.component';

describe('ShowAllCondidComponent', () => {
  let component: ShowAllCondidComponent;
  let fixture: ComponentFixture<ShowAllCondidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllCondidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllCondidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
