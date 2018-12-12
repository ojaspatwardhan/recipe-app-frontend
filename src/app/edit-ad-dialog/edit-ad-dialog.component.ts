import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Advertisement } from '../models/advertisement.model.client';
import { AdvertisementServiceClient } from '../services/advertisement.service.client';

@Component({
  selector: 'app-edit-ad-dialog',
  templateUrl: './edit-ad-dialog.component.html',
  styleUrls: ['./edit-ad-dialog.component.css']
})
export class EditAdDialogComponent implements OnInit {

  advertisement: Advertisement = new Advertisement();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<EditAdDialogComponent>, private adService: AdvertisementServiceClient) {
    this.advertisement = this.data.ad;
   }

  ngOnInit() {
  }

  closeEditAdDialog(): void {
    this.dialogRef.close();
  }

  updateAd(advertisement: Advertisement) {
    this.adService.updateAdvertisement(advertisement).then((advertisement) => {
      this.dialogRef.close();
    });
  }
}
