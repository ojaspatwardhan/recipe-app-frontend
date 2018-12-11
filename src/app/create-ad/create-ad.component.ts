import { Component, OnInit } from '@angular/core';
import { AdvertisementServiceClient } from '../services/advertisement.service.client';
import { Advertisement } from '../models/advertisement.model.client';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.css']
})
export class CreateAdComponent implements OnInit {

  advertisement: Advertisement = new Advertisement();

  constructor(private adService: AdvertisementServiceClient, public dialogRef: MatDialogRef<CreateAdComponent>) { }

  ngOnInit() {
  }

  createAd(advertisement: Advertisement) {
    // console.log(advertisement.name + " " + advertisement.image);
    this.adService.createAdvertisement(advertisement).then((advertisement) => {
      this.dialogRef.close();
    });
  }

  closeAdDialog(): void {
    this.dialogRef.close();
  }

}
