import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule],
  templateUrl: './ski-pricing.html',
  styleUrl: './ski-pricing.css',
})
export class SkiPricing {
  priceData: PriceItem[] = [
    {
      id: 1,
      resortName: '猫魔スキー場',
      ticketType: '成人全日券',
      duration: '1日',
      price: 5200,
      originalPrice: 6500,
      discount: 20,
      validPeriod: '2024.12.20 - 2025.03.31',
      features: ['全雪道使用', '缆车全包含', '免费WiFi']
    },
    {
      id: 2,
      resortName: '猫魔スキー場',
      ticketType: '学生半日券',
      duration: '半天',
      price: 2800,
      originalPrice: 3500,
      discount: 20,
      validPeriod: '2024.12.20 - 2025.03.31',
      features: ['下午12点后使用', '学生证必备', '缆车包含']
    },
    {
      id: 3,
      resortName: '蔵王温泉スキー場',
      ticketType: '成人全日券',
      duration: '1日',
      price: 4800,
      originalPrice: 6000,
      discount: 20,
      validPeriod: '2024.12.15 - 2025.04.05',
      features: ['树冰观赏区', '温泉优惠', '缆车包含']
    },
    {
      id: 4,
      resortName: '蔵王温泉スキー場',
      ticketType: '家庭套票',
      duration: '1日',
      price: 12800,
      originalPrice: 16000,
      discount: 20,
      validPeriod: '2024.12.15 - 2025.04.05',
      features: ['2大2小', '专用休息区', '儿童教学']
    },
    {
      id: 5,
      resortName: '苗場スキー場',
      ticketType: '季卡',
      duration: '全雪季',
      price: 45000,
      originalPrice: 60000,
      discount: 25,
      validPeriod: '2024.11.23 - 2025.05.05',
      features: ['无限次使用', '优先通道', '住宿折扣']
    },
    {
      id: 6,
      resortName: '苗場スキー場',
      ticketType: '成人全日券',
      duration: '1日',
      price: 5500,
      originalPrice: 7000,
      discount: 21,
      validPeriod: '2024.11.23 - 2025.05.05',
      features: ['全雪道使用', '与野泽联滑', '夜间滑雪']
    },
    {
      id: 7,
      resortName: '白馬五竜スキー場',
      ticketType: '早鸟优惠',
      duration: '1日',
      price: 4200,
      originalPrice: 6000,
      discount: 30,
      validPeriod: '2024.12.01 - 2025.01.15',
      features: ['早9点前入场', '免费早餐', '装备租赁折扣']
    },
    {
      id: 8,
      resortName: '白馬五竜スキー場',
      ticketType: '三日券',
      duration: '3日',
      price: 15000,
      originalPrice: 18000,
      discount: 17,
      validPeriod: '连续3天使用',
      features: ['非连续也可', '免费巴士', '雪具存储']
    },
    {
      id: 9,
      resortName: '神立スノーリゾート',
      ticketType: '夜场券',
      duration: '夜场',
      price: 2500,
      originalPrice: 3500,
      discount: 29,
      validPeriod: '16:00 - 21:00',
      features: ['灯光夜场', '音乐DJ', '餐饮折扣']
    },
    {
      id: 10,
      resortName: '軽井沢スキー場',
      ticketType: '初学者套餐',
      duration: '半天',
      price: 3200,
      originalPrice: 4500,
      discount: 29,
      validPeriod: '2024.12.20 - 2025.03.15',
      features: ['教练指导', '装备租赁', '初级雪道']
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
      alert('请至少选择一个票种');
      return;
    }
    this.isCheckoutVisible = !this.isCheckoutVisible;
  }

  confirmPurchase() {
    const purchaseDetails = this.selectedItems.map(purchase => 
      `${purchase.item.resortName} - ${purchase.item.ticketType} x${purchase.quantity} = ¥${purchase.item.price * purchase.quantity}`
    ).join('\n');
    
    const total = `总计: ¥${this.getTotalPrice()}`;
    const savings = `节省: ¥${this.getTotalSavings()}`;
    
    if (confirm(`确认购买以下票券？\n\n${purchaseDetails}\n\n${total}\n${savings}`)) {
      alert('购买成功！感谢您的订购，祝您滑雪愉快！');
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
