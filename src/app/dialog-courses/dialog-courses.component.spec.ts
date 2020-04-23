import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCoursesComponent } from './dialog-courses.component';

describe('DialogCoursesComponent', () => {
  let component: DialogCoursesComponent;
  let fixture: ComponentFixture<DialogCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
