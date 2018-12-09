import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecipeAdminComponent } from './create-recipe-admin.component';

describe('CreateRecipeAdminComponent', () => {
  let component: CreateRecipeAdminComponent;
  let fixture: ComponentFixture<CreateRecipeAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRecipeAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRecipeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
