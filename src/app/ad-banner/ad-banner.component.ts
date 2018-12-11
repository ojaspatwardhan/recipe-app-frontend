import { Component, OnInit } from '@angular/core';
import { AdvertisementServiceClient } from '../services/advertisement.service.client';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements OnInit {

  advertisements: any[];

  constructor(private adService: AdvertisementServiceClient) { }

  ngOnInit() {
    this.adService.findAllAdvertisement().then((advertisements) => {
      this.advertisements = advertisements;
    });
  }
}
