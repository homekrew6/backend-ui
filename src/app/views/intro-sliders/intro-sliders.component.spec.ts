import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroSlidersComponent } from './intro-sliders.component';

describe('IntroSlidersComponent', () => {
  let component: IntroSlidersComponent;
  let fixture: ComponentFixture<IntroSlidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroSlidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroSlidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
