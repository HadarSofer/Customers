import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AaacComponent } from './aaac.component';

describe('AaacComponent', () => {
  let component: AaacComponent;
  let fixture: ComponentFixture<AaacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AaacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AaacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
