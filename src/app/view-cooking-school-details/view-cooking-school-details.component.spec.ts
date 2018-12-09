import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCookingSchoolDetailsComponent } from './view-cooking-school-details.component';

describe('ViewCookingSchoolDetailsComponent', () => {
  let component: ViewCookingSchoolDetailsComponent;
  let fixture: ComponentFixture<ViewCookingSchoolDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCookingSchoolDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCookingSchoolDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
