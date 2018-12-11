import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsAdminPanelComponent } from './contact-us-admin-panel.component';

describe('ContactUsAdminPanelComponent', () => {
  let component: ContactUsAdminPanelComponent;
  let fixture: ComponentFixture<ContactUsAdminPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactUsAdminPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsAdminPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
