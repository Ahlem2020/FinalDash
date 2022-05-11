import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedyComponent } from './needy.component';

describe('NeedyComponent', () => {
  let component: NeedyComponent;
  let fixture: ComponentFixture<NeedyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeedyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
