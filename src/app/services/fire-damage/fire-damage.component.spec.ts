import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireDamageComponent } from './fire-damage.component';

describe('FireDamageComponent', () => {
  let component: FireDamageComponent;
  let fixture: ComponentFixture<FireDamageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FireDamageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FireDamageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
