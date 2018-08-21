import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDurationComponent } from './get-duration.component';

describe('GetDurationComponent', () => {
  let component: GetDurationComponent;
  let fixture: ComponentFixture<GetDurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetDurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
