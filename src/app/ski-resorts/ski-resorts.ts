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
    width: '95vw',
    maxWidth: '900px',
    panelClass: 'resort-detail-dialog'
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
    url: 'https://www.nekoma.co.jp/',
    features: '粉雪圣地，非压雪区域丰富，越野滑雪线路完善',
    season: '12月下旬 - 4月上旬，最佳雪期1-3月',
    transportation: 'JR只见线会津川口站转巴士，自驾约3小时',
    difficulty: '初级 20% | 中级 40% | 高级 40%'
  },
  {
    id: 2,
    name: '蔵王温泉スキー場',
    location: '山形県',
    description: '以樹冰闻名，适合观光与滑雪',
    image: 'https://zaomountainresort.com/wp-content/uploads/2022/09/grend02.jpeg',
    url: 'https://zaomountainresort.com/ski/',
    features: '世界罕见的树冰奇观，温泉滑雪完美结合',
    season: '12月 - 5月黄金周，树冰观赏期12-2月',
    transportation: '山形新干线山形站转巴士，自驾约2.5小时',
    difficulty: '初级 35% | 中级 45% | 高级 20%'
  },
  {
    id: 3,
    name: '苗場スキー場',
    location: '新潟県',
    description: '日本最大的雪场之一，设施完善',
    image: 'https://www.princehotels.co.jp/ski/naeba/images/top_230927main02_2000x910.jpg',
    url: 'https://www.princehotels.com/en/ski/naeba/',
    features: '与野泽温泉联滑，举办过FIS滑雪世界杯',
    season: '11月下旬 - 5月上旬，雪季最长之一',
    transportation: '上越新干线越后汤泽站转免费巴士，自驾约3小时',
    difficulty: '初级 30% | 中级 50% | 高级 20%'
  },
{
  id: 4,
  name: '白馬五竜スキー場',
  location: '長野県',
  description: '白马三大雪场之一，雪道均衡，单板双板都很友好',
  image: 'https://www.hakubaescal.com/winter/common/image/gelande/image56.jpg',
  url: 'https://www.hakubaescal.com/',
  features: '雪道种类丰富，长距离滑行路线，风景优美',
  season: '12月上旬 - 4月上旬，2月雪质最佳',
  transportation: 'JR大糸线白马站转巴士，自驾约4小时',
  difficulty: '初级 25% | 中级 55% | 高级 20%'
},

{
  id: 5,
  name: '神立スノーリゾート',
  location: '新潟県',
  description: '东京日归热门，夜滑强，单板玩家很多',
  image: 'https://www.kandatsu.com/ksr/wp-content/themes/connectitheme/assets/img/subheading/course-guide.webp',
  url: 'https://www.kandatsu.com/',
  features: '夜场开放至晚上9点，地形公园完善',
  season: '12月中旬 - 3月下旬，周末人流较多',
  transportation: '上越新干线越后汤泽站直达，约70分钟',
  difficulty: '初级 35% | 中级 40% | 高级 25%'
},
  {
    id: 6,
    name: '軽井沢スキー場',
    location: '長野県',
    description: '交通便利，适合家庭与初学者',
    image: 'https://www.princehotels.co.jp/ski/karuizawa/images/course_slopes%20courses.png.png',
    url: 'https://www.princehotels.co.jp/ski/karuizawa/',
    features: '新手友好，儿童滑雪教学设施完善',
    season: '12月下旬 - 3月中旬，寒假期间繁忙',
    transportation: '北陆新干线轻井泽站转巴士，自驾约1.5小时',
    difficulty: '初级 50% | 中级 40% | 高级 10%'
  },
  {
    id: 7,
    name: '八方尾根スキー場',
    location: '長野県',
    description: '奥运级雪场，雪道落差大',
    image: 'https://www.happo-one.jp/wp2019/wp-content/themes/happo-one2020/img/gelande/index/image01.jpg',
    url: 'https://www.happo-one.jp/',
    features: '1998年冬奥会举办地，长距离滑行线路',
    season: '11月下旬 - 5月上旬，雪季长雪质好',
    transportation: 'JR大糸线信浓大町站转巴士，自驾约4小时',
    difficulty: '初级 20% | 中级 50% | 高级 30%'
  },
  {
    id: 8,
    name: '志賀高原スキー場',
    location: '長野県',
    description: '日本最大级别雪区，雪质顶级',
    image: 'https://www.shigakogen-ski.or.jp/assets/images/okushiga.jpg',
    url: 'https://www.shigakogen-ski.or.jp/',
    features: '多个滑雪场联票，粉雪质量世界级',
    season: '11月中旬 - 5月上旬，雪量充足',
    transportation: '长野经饭山线直达，自驾约3.5小时',
    difficulty: '初级 25% | 中级 55% | 高级 20%'
  },
  {
    id: 9,
    name: '竜王スキーパーク',
    location: '長野県',
    description: '以云海和粉雪闻名，年轻人很爱',
    image: 'https://ryuoo.com/zP7gL2nW/wp-content/uploads/2025/09/SANY0434-1200x900.jpg',
    url: 'https://ryuoo.com/',
    features: '高山云海景观，地形公园丰富',
    season: '12月上旬 - 4月上旬，晴天云海壮观',
    transportation: 'JR中央线驹根站转巴士，自驾约3小时',
    difficulty: '初级 30% | 中级 45% | 高级 25%'
  }
];
onLocationClick(name: string) {
      const url = `https://www.google.com/maps/search/?api=1&query=${name}`;

    // 打开新标签页显示 Google 地图
    window.open(url, '_blank');
}




}
