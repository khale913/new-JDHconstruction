import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoldRemovalComponent } from './mold-removal.component';

describe('MoldRemovalComponent', () => {
  let component: MoldRemovalComponent;
  let fixture: ComponentFixture<MoldRemovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoldRemovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoldRemovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
