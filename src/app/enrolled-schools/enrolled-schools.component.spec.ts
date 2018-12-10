import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolledSchoolsComponent } from './enrolled-schools.component';

describe('EnrolledSchoolsComponent', () => {
  let component: EnrolledSchoolsComponent;
  let fixture: ComponentFixture<EnrolledSchoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrolledSchoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolledSchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
