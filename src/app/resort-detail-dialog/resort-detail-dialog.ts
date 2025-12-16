import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface ResortDetail {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
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

  onImageError(event: any) {
    event.target.src = 'https://via.placeholder.com/500x200/cccccc/666666?text=滑雪场图片';
  }
}
