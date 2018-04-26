import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelReasonComponent } from './cancelReason.component';

describe('CancelReasonComponent', () => {
  let component: CancelReasonComponent;
  let fixture: ComponentFixture<CancelReasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CancelReasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
