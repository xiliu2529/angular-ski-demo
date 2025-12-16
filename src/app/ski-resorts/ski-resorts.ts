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
    image: 'https://www.nekoma.co.jp/wp-content/uploads/icp_post_image/18000759439836207/18030971039756635',
    url: 'https://www.nekoma.co.jp/'
  },
  {
    id: 2,
    name: '蔵王温泉スキー場',
    location: '山形県',
    description: '以樹冰闻名，适合观光与滑雪',
    image: 'https://zaomountainresort.com/wp-content/uploads/2022/09/grend02.jpeg',
    url: 'https://zaomountainresort.com/ski/'
  },
  {
    id: 3,
    name: '苗場スキー場',
    location: '新潟県',
    description: '日本最大的雪场之一，设施完善',
    image: 'https://www.princehotels.co.jp/ski/naeba/images/top_230927main02_2000x910.jpg',
    url: 'https://www.princehotels.com/en/ski/naeba/'
  },
{
  id: 4,
  name: '白馬五竜スキー場',
  location: '長野県',
  description: '白马三大雪场之一，雪道均衡，单板双板都很友好',
  image: 'https://www.hakubaescal.com/winter/common/image/gelande/image56.jpg',
  url: 'https://www.hakubaescal.com/'
},

{
  id: 5,
  name: '神立スノーリゾート',
  location: '新潟県',
  description: '东京日归热门，夜滑强，单板玩家很多',
  image: 'https://www.kandatsu.com/ksr/wp-content/themes/connectitheme/assets/img/subheading/course-guide.webp',
  url: 'https://www.kandatsu.com/'
}
,
  {
    id: 6,
    name: '軽井沢スキー場',
    location: '長野県',
    description: '交通便利，适合家庭与初学者',
    image: 'https://www.princehotels.co.jp/ski/karuizawa/images/course_slopes%20courses.png.png',
    url: 'https://www.princehotels.co.jp/ski/karuizawa/'
  },
  {
    id: 7,
    name: '八方尾根スキー場',
    location: '長野県',
    description: '奥运级雪场，雪道落差大',
    image: 'https://www.happo-one.jp/wp2019/wp-content/themes/happo-one2020/img/gelande/index/image01.jpg',
    url: 'https://www.happo-one.jp/'
  },
  {
    id: 8,
    name: '志賀高原スキー場',
    location: '長野県',
    description: '日本最大级别雪区，雪质顶级',
    image: 'https://www.shigakogen-ski.or.jp/assets/images/okushiga.jpg',
    url: 'https://www.shigakogen-ski.or.jp/'
  },
  {
    id: 9,
    name: '竜王スキーパーク',
    location: '長野県',
    description: '以云海和粉雪闻名，年轻人很爱',
    image: 'https://ryuoo.com/zP7gL2nW/wp-content/uploads/2025/09/SANY0434-1200x900.jpg',
    url: 'https://ryuoo.com/'
  }
];



}
