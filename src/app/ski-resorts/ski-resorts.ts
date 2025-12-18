import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResortDetailDialogComponent } from '../resort-detail-dialog/resort-detail-dialog';
import { TranslatePipe } from '../pipes/translate.pipe';


@Component({
  selector: 'app-ski-resorts',
  imports: [TranslatePipe],
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
    description: '雪質が非常に良く、中・上級者向け',
    image: 'https://www.nekoma.co.jp/wp-content/uploads/icp_post_image/18000759439836207/18030971039756635',
    url: 'https://www.nekoma.co.jp/',
    features: 'パウダースノーの名所。非圧雪エリアが豊富で、バックカントリー向けコースも充実',
    season: '12月下旬〜4月上旬（ベストシーズン：1〜3月）',
    transportation: 'JR只見線 会津川口駅からバス／車で約3時間',
    difficulty: '初級 20% | 中級 40% | 上級 40%'
  },
  {
    id: 2,
    name: '蔵王温泉スキー場',
    location: '山形県',
    description: '樹氷で有名。観光とスキーの両方が楽しめる',
    image: 'https://zaomountainresort.com/wp-content/uploads/2022/09/grend02.jpeg',
    url: 'https://zaomountainresort.com/ski/',
    features: '世界的にも珍しい樹氷景観。温泉とスキーを同時に満喫',
    season: '12月〜5月（GWまで）／樹氷の見頃：12〜2月',
    transportation: '山形新幹線 山形駅からバス／車で約2.5時間',
    difficulty: '初級 35% | 中級 45% | 上級 20%'
  },
  {
    id: 3,
    name: '苗場スキー場',
    location: '新潟県',
    description: '日本最大級のスキー場で、設備が充実',
    image: 'https://www.princehotels.co.jp/ski/naeba/images/top_230927main02_2000x910.jpg',
    url: 'https://www.princehotels.com/en/ski/naeba/',
    features: 'かぐらスキー場と連結。FISアルペンスキーワールドカップ開催実績あり',
    season: '11月下旬〜5月上旬（国内でも屈指のロングシーズン）',
    transportation: '上越新幹線 越後湯沢駅から無料シャトルバス／車で約3時間',
    difficulty: '初級 30% | 中級 50% | 上級 20%'
  },
  {
    id: 4,
    name: '白馬五竜スキー場',
    location: '長野県',
    description: '白馬エリア三大スキー場の一つ。バランスの取れたコース構成でスキー・スノーボード両方に適している',
    image: 'https://www.hakubaescal.com/winter/common/image/gelande/image56.jpg',
    url: 'https://www.hakubaescal.com/',
    features: '多彩なコースとロングラン、景色の美しさが魅力',
    season: '12月上旬〜4月上旬（2月が最も雪質良好）',
    transportation: 'JR大糸線 白馬駅からバス／車で約4時間',
    difficulty: '初級 25% | 中級 55% | 上級 20%'
  },
  {
    id: 5,
    name: '神立スノーリゾート',
    location: '新潟県',
    description: '東京から日帰り可能。ナイターが充実し、スノーボーダーに人気',
    image: 'https://www.kandatsu.com/ksr/wp-content/themes/connectitheme/assets/img/subheading/course-guide.webp',
    url: 'https://www.kandatsu.com/',
    features: 'ナイターは21時まで営業。地形パークが充実',
    season: '12月中旬〜3月下旬（週末は混雑しやすい）',
    transportation: '上越新幹線 越後湯沢駅から直行／約70分',
    difficulty: '初級 35% | 中級 40% | 上級 25%'
  },
  {
    id: 6,
    name: '軽井沢スキー場',
    location: '長野県',
    description: 'アクセス抜群で、ファミリーや初心者向け',
    image: 'https://www.princehotels.co.jp/ski/karuizawa/images/course_slopes%20courses.png.png',
    url: 'https://www.princehotels.co.jp/ski/karuizawa/',
    features: '初心者に優しく、キッズ向けスクールや設備が充実',
    season: '12月下旬〜3月中旬（冬休み期間は混雑）',
    transportation: '北陸新幹線 軽井沢駅からバス／車で約1.5時間',
    difficulty: '初級 50% | 中級 40% | 上級 10%'
  },
  {
    id: 7,
    name: '八方尾根スキー場',
    location: '長野県',
    description: 'オリンピック開催実績のある本格派スキー場。標高差が大きい',
    image: 'https://www.happo-one.jp/wp2019/wp-content/themes/happo-one2020/img/gelande/index/image01.jpg',
    url: 'https://www.happo-one.jp/',
    features: '1998年長野冬季五輪会場。ロングランコースが魅力',
    season: '11月下旬〜5月上旬（雪質・積雪量ともに優秀）',
    transportation: 'JR大糸線 信濃大町駅からバス／車で約4時間',
    difficulty: '初級 20% | 中級 50% | 上級 30%'
  },
  {
    id: 8,
    name: '志賀高原スキー場',
    location: '長野県',
    description: '日本最大級のスノーエリア。雪質は国内トップクラス',
    image: 'https://www.shigakogen-ski.or.jp/assets/images/okushiga.jpg',
    url: 'https://www.shigakogen-ski.or.jp/',
    features: '複数スキー場共通リフト券。世界水準のパウダースノー',
    season: '11月中旬〜5月上旬（積雪量が非常に豊富）',
    transportation: '長野駅から飯山線経由／車で約3.5時間',
    difficulty: '初級 25% | 中級 55% | 上級 20%'
  },
  {
    id: 9,
    name: '竜王スキーパーク',
    location: '長野県',
    description: '雲海とパウダースノーで有名。若者に人気',
    image: 'https://ryuoo.com/zP7gL2nW/wp-content/uploads/2025/09/SANY0434-1200x900.jpg',
    url: 'https://ryuoo.com/',
    features: '山頂からの雲海景観。地形パークが充実',
    season: '12月上旬〜4月上旬（晴天時の雲海は圧巻）',
    transportation: 'JR中央線 駒根駅からバス／車で約3時間',
    difficulty: '初級 30% | 中級 45% | 上級 25%'
  }
];

onLocationClick(name: string) {
      const url = `https://www.google.com/maps/search/?api=1&query=${name}`;

    // 打开新标签页显示 Google 地图
    window.open(url, '_blank');
}




}
