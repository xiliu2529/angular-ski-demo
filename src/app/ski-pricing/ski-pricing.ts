import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService, Order } from '../order';
import { TranslatePipe } from '../pipes/translate.pipe';
import { I18nService } from '../services/i18n.service';

interface PriceItem {
  id: number;
  resortName: string;
  ticketType: string;
  duration: string;
  price: number;
  originalPrice: number;
  discount: number;
  validPeriod: string;
  features: string[];
  selected?: boolean;
}

interface PurchaseItem {
  item: PriceItem;
  quantity: number;
}

@Component({
  selector: 'app-ski-pricing',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './ski-pricing.html',
  styleUrl: './ski-pricing.css',
})
export class SkiPricing {
  constructor(private orderService: OrderService) {}

  priceData: PriceItem[] = [
  {
    id: 1,
    resortName: '猫魔スキー場',
    ticketType: '大人1日券',
    duration: '1日',
    price: 5200,
    originalPrice: 6500,
    discount: 20,
    validPeriod: '2024.12.20 ～ 2025.03.31',
    features: ['全コース利用可', 'リフト乗り放題', '無料Wi-Fi']
  },
  {
    id: 2,
    resortName: '猫魔スキー場',
    ticketType: '学生半日券',
    duration: '半日',
    price: 2800,
    originalPrice: 3500,
    discount: 20,
    validPeriod: '2024.12.20 ～ 2025.03.31',
    features: ['12時以降利用可', '学生証必須', 'リフト利用可']
  },
  {
    id: 3,
    resortName: '蔵王温泉スキー場',
    ticketType: '大人1日券',
    duration: '1日',
    price: 4800,
    originalPrice: 6000,
    discount: 20,
    validPeriod: '2024.12.15 ～ 2025.04.05',
    features: ['樹氷エリア', '温泉割引', 'リフト利用可']
  },
  {
    id: 4,
    resortName: '蔵王温泉スキー場',
    ticketType: 'ファミリーパック',
    duration: '1日',
    price: 12800,
    originalPrice: 16000,
    discount: 20,
    validPeriod: '2024.12.15 ～ 2025.04.05',
    features: ['大人2名＋子供2名', '専用休憩スペース', 'キッズレッスン']
  },
  {
    id: 5,
    resortName: '苗場スキー場',
    ticketType: 'シーズンパス',
    duration: 'シーズン中',
    price: 45000,
    originalPrice: 60000,
    discount: 25,
    validPeriod: '2024.11.23 ～ 2025.05.05',
    features: ['回数無制限', '優先レーン', '宿泊割引']
  },
  {
    id: 6,
    resortName: '苗場スキー場',
    ticketType: '大人1日券',
    duration: '1日',
    price: 5500,
    originalPrice: 7000,
    discount: 21,
    validPeriod: '2024.11.23 ～ 2025.05.05',
    features: ['全コース利用可', 'かぐら連絡滑走', 'ナイター営業']
  },
  {
    id: 7,
    resortName: '白馬五竜スキー場',
    ticketType: '早割チケット',
    duration: '1日',
    price: 4200,
    originalPrice: 6000,
    discount: 30,
    validPeriod: '2024.12.01 ～ 2025.01.15',
    features: ['9時前入場', '無料朝食', 'レンタル割引']
  },
  {
    id: 8,
    resortName: '白馬五竜スキー場',
    ticketType: '3日券',
    duration: '3日',
    price: 15000,
    originalPrice: 18000,
    discount: 17,
    validPeriod: '3日間利用可',
    features: ['連続利用不要', '無料シャトルバス', '用具保管']
  },
  {
    id: 9,
    resortName: '神立スノーリゾート',
    ticketType: 'ナイター券',
    duration: 'ナイター',
    price: 2500,
    originalPrice: 3500,
    discount: 29,
    validPeriod: '16:00 ～ 21:00',
    features: ['ナイター照明', 'DJミュージック', '飲食割引']
  },
  {
    id: 10,
    resortName: '軽井沢スキー場',
    ticketType: '初心者パック',
    duration: '半日',
    price: 3200,
    originalPrice: 4500,
    discount: 29,
    validPeriod: '2024.12.20 ～ 2025.03.15',
    features: ['インストラクター指導', '用具レンタル込み', '初級コース']
  }
];


  selectedItems: PurchaseItem[] = [];
  isCheckoutVisible = false;

  toggleSelection(item: PriceItem) {
    const index = this.selectedItems.findIndex(purchase => purchase.item.id === item.id);
    
    if (index > -1) {
      this.selectedItems.splice(index, 1);
    } else {
      this.selectedItems.push({
        item: item,
        quantity: 1
      });
    }
  }

  updateQuantity(itemId: number, quantity: number) {
    const purchase = this.selectedItems.find(p => p.item.id === itemId);
    if (purchase) {
      purchase.quantity = Math.max(1, quantity);
    }
  }

  removeItem(itemId: number) {
    const index = this.selectedItems.findIndex(p => p.item.id === itemId);
    if (index > -1) {
      this.selectedItems.splice(index, 1);
    }
  }

  getTotalPrice(): number {
    return this.selectedItems.reduce((total, purchase) => {
      return total + (purchase.item.price * purchase.quantity);
    }, 0);
  }

  getTotalOriginalPrice(): number {
    return this.selectedItems.reduce((total, purchase) => {
      return total + (purchase.item.originalPrice * purchase.quantity);
    }, 0);
  }

  getTotalSavings(): number {
    return this.getTotalOriginalPrice() - this.getTotalPrice();
  }

  proceedToCheckout() {
  if (this.selectedItems.length === 0) {
    alert('少なくとも1つのチケットを選択してください');
    return;
  }
  this.isCheckoutVisible = !this.isCheckoutVisible;
}

confirmPurchase() {
  const purchaseDetails = this.selectedItems.map(purchase => 
    `${purchase.item.resortName} - ${purchase.item.ticketType} x${purchase.quantity} = ¥${purchase.item.price * purchase.quantity}`
  ).join('\n');
  
  const total = `合計: ¥${this.getTotalPrice()}`;
  const savings = `割引額: ¥${this.getTotalSavings()}`;
  
  if (confirm(`以下のチケットを購入してよろしいですか？\n\n${purchaseDetails}\n\n${total}\n${savings}`)) {
    // 注文作成
    const orderId = this.orderService.createOrder(this.selectedItems);
    
    alert(`購入が完了しました！\n注文番号：${orderId}\nご利用ありがとうございます。スキーをお楽しみください！`);
    this.selectedItems = [];
    this.isCheckoutVisible = false;
  }
}


  isSelected(itemId: number): boolean {
    return this.selectedItems.some(purchase => purchase.item.id === itemId);
  }

  formatPrice(price: number): string {
    return `¥${price.toLocaleString()}`;
  }
}
