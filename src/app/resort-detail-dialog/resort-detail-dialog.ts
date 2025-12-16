import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface ResortDetail {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  url: string;
}

@Component({
  selector: 'app-resort-detail-dialog',
  imports: [],
  templateUrl: './resort-detail-dialog.html',
  styleUrl: './resort-detail-dialog.css',
})
export class ResortDetailDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ResortDetail,
    private dialogRef: MatDialogRef<ResortDetailDialogComponent>
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
  openOfficialSite(url?: string) {
  if (url) {
    window.open(url, '_blank');
  }
}


  onImageError(event: any) {
    // event.target.src = 'https://www.nekoma.co.jp/wp-content/uploads/icp_post_image/18000759439836207/18030971039756635';
  }
}
