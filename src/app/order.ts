import { Injectable } from '@angular/core';

export interface OrderItem {
  id: number;
  resortName: string;
  ticketType: string;
  duration: string;
  price: number;
  quantity: number;
  features: string[];
}

export interface Order {
  id: string;
  orderDate: Date;
  items: OrderItem[];
  totalAmount: number;
  totalOriginalAmount: number;
  totalSavings: number;
  status: 'completed' | 'pending' | 'cancelled';
}

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orders: Order[] = [];

  constructor() {
    this.loadOrdersFromStorage();
  }

  // 创建新订单
  createOrder(purchaseItems: any[]): string {
    const orderId = this.generateOrderId();
    const orderDate = new Date();
    
    const orderItems: OrderItem[] = purchaseItems.map(purchase => ({
      id: purchase.item.id,
      resortName: purchase.item.resortName,
      ticketType: purchase.item.ticketType,
      duration: purchase.item.duration,
      price: purchase.item.price,
      quantity: purchase.quantity,
      features: purchase.item.features
    }));

    const totalAmount = purchaseItems.reduce((sum, purchase) => 
      sum + (purchase.item.price * purchase.quantity), 0);
    const totalOriginalAmount = purchaseItems.reduce((sum, purchase) => 
      sum + (purchase.item.originalPrice * purchase.quantity), 0);
    const totalSavings = totalOriginalAmount - totalAmount;

    const order: Order = {
      id: orderId,
      orderDate,
      items: orderItems,
      totalAmount,
      totalOriginalAmount,
      totalSavings,
      status: 'completed'
    };

    this.orders.unshift(order); // 添加到数组开头，最新的订单在前
    this.saveOrdersToStorage();
    
    return orderId;
  }

  // 获取所有订单
  getOrders(): Order[] {
    return [...this.orders]; // 返回副本
  }

  // 获取订单总数
  getOrderCount(): number {
    return this.orders.length;
  }

  // 获取总消费金额
  getTotalSpent(): number {
    return this.orders.reduce((sum, order) => sum + order.totalAmount, 0);
  }

  // 获取总节省金额
  getTotalSavings(): number {
    return this.orders.reduce((sum, order) => sum + order.totalSavings, 0);
  }

  // 删除订单（可选功能）
  deleteOrder(orderId: string): boolean {
    const index = this.orders.findIndex(order => order.id === orderId);
    if (index > -1) {
      this.orders.splice(index, 1);
      this.saveOrdersToStorage();
      return true;
    }
    return false;
  }

  // 生成订单ID
  private generateOrderId(): string {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `ORD${timestamp}${random}`;
  }

  // 保存到localStorage
  private saveOrdersToStorage(): void {
    try {
      localStorage.setItem('ski_orders', JSON.stringify(this.orders));
    } catch (error) {
      console.error('Failed to save orders to localStorage:', error);
    }
  }

  // 从localStorage加载
  private loadOrdersFromStorage(): void {
    try {
      const stored = localStorage.getItem('ski_orders');
      if (stored) {
        const orders = JSON.parse(stored);
        // 转换日期字符串回Date对象
        this.orders = orders.map((order: any) => ({
          ...order,
          orderDate: new Date(order.orderDate)
        }));
      }
    } catch (error) {
      console.error('Failed to load orders from localStorage:', error);
      this.orders = [];
    }
  }
}
