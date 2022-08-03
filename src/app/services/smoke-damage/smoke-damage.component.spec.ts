import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmokeDamageComponent } from './smoke-damage.component';

describe('SmokeDamageComponent', () => {
  let component: SmokeDamageComponent;
  let fixture: ComponentFixture<SmokeDamageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmokeDamageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmokeDamageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
