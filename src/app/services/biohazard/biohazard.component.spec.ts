import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiohazardComponent } from './biohazard.component';

describe('BiohazardComponent', () => {
  let component: BiohazardComponent;
  let fixture: ComponentFixture<BiohazardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiohazardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiohazardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
