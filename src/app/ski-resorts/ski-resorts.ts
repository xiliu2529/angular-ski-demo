import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResortDetailDialogComponent } from '../resort-detail-dialog/resort-detail-dialog';


@Component({
  selector: 'app-ski-resorts',
  imports: [],
  templateUrl: './ski-resorts.html',
  styleUrl: './ski-resorts.css',
})




export class SkiResorts {

constructor(private dialog: MatDialog) {}

  selectedResort: any = null;
isModalOpen = false;


openDetail(resort: any) {
  this.dialog.open(ResortDetailDialogComponent, {
    data: resort,
    width: '420px'
  });
}


closeModal() {
  this.isModalOpen = false;
}

onImageError(event: any) {
  // 图片加载失败时使用默认图片
  event.target.src = 'https://via.placeholder.com/350x220/cccccc/666666?text=滑雪场图片';
}

  skiResorts = [
    {
      id: 1,
      name: '猫魔スキー場',
      location: '福島県',
      description: '雪质优秀，适合中高级滑雪者',
      image: '../images/nekoma.jpg'
    },
    {
      id: 2,
      name: '蔵王温泉スキー場',
      location: '山形県',
      description: '以树冰闻名，适合观光与滑雪',
      image: '../images/resort2.jpg'
    },
    {
      id: 3,
      name: '苗場スキー場',
      location: '新潟県',
      description: '日本最大的滑雪场之一，设施完善',
      image: '../images/resort3.jpg'
    },
    {
      id: 4,
      name: '志賀高原スキー場',
      location: '長野県',
      description: '多个雪场相连，雪质极佳',
      image: '../images/resort4.jpg'
    },
    {
      id: 5,
      name: 'ガーラ湯沢スキー場',
      location: '新潟県',
      description: '现代化滑雪场，交通便利',
      image: '../images/resort5.jpg'
    },
    {
      id: 6,
      name: '軽井沢スキー場',
      location: '長野県',
      description: '历史悠久，适合家庭滑雪',
      image: '../images/resort6.jpg'
    },
    {
      id: 7,
      name: '八方尾根スキー場',
      location: '長野県',
      description: '长雪季，专业滑雪者喜爱的雪场',
      image: '../images/resort7.jpg'
    },
    {
      id: 8,
      name: '白馬八方スキー場',
      location: '長野県',
      description: '国际级滑雪场，举办过冬奥会',
      image: '../images/resort8.jpg'
    }
  ];

}
