import { Component, OnInit } from '@angular/core';
import { ContactUsServiceClient } from '../services/contact-us.service.client';
import { Query } from '../models/query.model.client';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  query: Query = new Query();

  constructor(private contactUsService: ContactUsServiceClient) { }

  ngOnInit() {
  }

  sendQuery(query) {
    this.contactUsService.createQuery(query).then((query) => {
      window.alert("Query sent successfully");
      window.location.reload();
    });
  }

}
