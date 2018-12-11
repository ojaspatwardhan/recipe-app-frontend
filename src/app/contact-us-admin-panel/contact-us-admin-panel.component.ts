import { Component, OnInit } from '@angular/core';
import { ContactUsServiceClient } from '../services/contact-us.service.client';

@Component({
  selector: 'app-contact-us-admin-panel',
  templateUrl: './contact-us-admin-panel.component.html',
  styleUrls: ['./contact-us-admin-panel.component.css']
})
export class ContactUsAdminPanelComponent implements OnInit {

  queries: any;

  constructor(private contactUsService: ContactUsServiceClient) { }

  ngOnInit() {
    this.contactUsService.findAllQuery().then((queries) => {
      this.queries = queries;
    });
  }

}
