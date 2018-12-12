import { Component, OnInit } from '@angular/core';
import { AdvertisementServiceClient } from '../services/advertisement.service.client';
import { Advertisement } from '../models/advertisement.model.client';
import { CookieService } from 'ngx-cookie-service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.css']
})
export class CreateAdComponent implements OnInit {

  advertisement: Advertisement = new Advertisement();

  constructor(private cookieService: CookieService, private adService: AdvertisementServiceClient, public dialogRef: MatDialogRef<CreateAdComponent>) { }

  ngOnInit() {
  }

  createAd(advertisement: Advertisement) {
    advertisement.createdBy = this.cookieService.get("username");
    this.adService.createAdvertisement(advertisement).then((advertisement) => {
      this.dialogRef.close();
    });
  }

  closeAdDialog(): void {
    this.dialogRef.close();
  }

}
