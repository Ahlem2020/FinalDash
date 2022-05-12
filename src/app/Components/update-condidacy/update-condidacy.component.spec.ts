import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCondidacyComponent } from './update-condidacy.component';

describe('UpdateCondidacyComponent', () => {
  let component: UpdateCondidacyComponent;
  let fixture: ComponentFixture<UpdateCondidacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCondidacyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCondidacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
