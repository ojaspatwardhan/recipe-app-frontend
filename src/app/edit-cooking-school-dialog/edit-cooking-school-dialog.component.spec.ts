import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCookingSchoolDialogComponent } from './edit-cooking-school-dialog.component';

describe('EditCookingSchoolDialogComponent', () => {
  let component: EditCookingSchoolDialogComponent;
  let fixture: ComponentFixture<EditCookingSchoolDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCookingSchoolDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCookingSchoolDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
