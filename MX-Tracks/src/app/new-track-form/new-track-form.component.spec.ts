import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTrackFormComponent } from './new-track-form.component';

describe('NewTrackFormComponent', () => {
  let component: NewTrackFormComponent;
  let fixture: ComponentFixture<NewTrackFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTrackFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTrackFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
