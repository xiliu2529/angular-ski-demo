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
      image: 'assets/images/zao.jpg'
    },
    {
      id: 2,
      name: '蔵王温泉スキー場',
      location: '山形県',
      description: '以树冰闻名，适合观光与滑雪',
      image: 'assets/images/zao.jpg'
    },
    {
      id: 2,
      name: '蔵王温泉スキー場',
      location: '山形県',
      description: '以树冰闻名，适合观光与滑雪',
      image: 'assets/images/zao.jpg'
    },
    {
      id: 2,
      name: '蔵王温泉スキー場',
      location: '山形県',
      description: '以树冰闻名，适合观光与滑雪',
      image: 'assets/images/zao.jpg'
    },
    {
      id: 2,
      name: '蔵王温泉スキー場',
      location: '山形県',
      description: '以树冰闻名，适合观光与滑雪',
      image: 'assets/images/zao.jpg'
    },
    {
      id: 2,
      name: '蔵王温泉スキー場',
      location: '山形県',
      description: '以树冰闻名，适合观光与滑雪',
      image: 'assets/images/zao.jpg'
    },
    {
      id: 2,
      name: '蔵王温泉スキー場',
      location: '山形県',
      description: '以树冰闻名，适合观光与滑雪',
      image: 'assets/images/zao.jpg'
    },
  ];

}
