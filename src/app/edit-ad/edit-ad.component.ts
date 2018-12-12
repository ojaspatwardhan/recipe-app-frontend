import { Component, OnInit } from '@angular/core';
import { AdvertisementServiceClient } from '../services/advertisement.service.client';
import { Advertisement } from '../models/advertisement.model.client';
import { CookieService } from 'ngx-cookie-service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { EditAdDialogComponent } from '../edit-ad-dialog/edit-ad-dialog.component';

@Component({
  selector: 'app-edit-ad',
  templateUrl: './edit-ad.component.html',
  styleUrls: ['./edit-ad.component.css']
})
export class EditAdComponent implements OnInit {

  advertisements: Advertisement[] = new Array();
  advertisement: Advertisement = new Advertisement();

  constructor(public dialog: MatDialog, private cookieService: CookieService, private adService: AdvertisementServiceClient) { }

  ngOnInit() {
    this.adService.findAdvertisementByName(this.cookieService.get("username")).then((advertisements) => {
      this.advertisements = advertisements;
    });
  }

  openEditAdDialog(advertisement: Advertisement): void {
    const dialogRef = this.dialog.open(EditAdDialogComponent, {
      width: '500px',
      height: '350px',
      data: {
        ad: advertisement
      }
    });
  }

  deleteAd(advertisement) {
    console.log(advertisement);
    this.adService.deleteAdvertisement(advertisement._id).then((message) => {
      this.adService.findAdvertisementByName(this.cookieService.get("username")).then((advertisements) => {
        this.advertisements = advertisements;
      });
    });
  }
}
