import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface ResortDetail {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  url: string;
  features?: string;
  season?: string;
  transportation?: string;
  difficulty?: string;
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
    // 图片加载失败时使用默认图片
    if (event && event.target) {
      event.target.src = 'https://via.placeholder.com/350x220/cccccc/666666?text=滑雪场图片';
    }
  }
}
