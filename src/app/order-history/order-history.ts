import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService, Order, OrderItem } from '../order';
import { Router } from '@angular/router';
import { TranslatePipe } from '../pipes/translate.pipe';
import { I18nService } from '../services/i18n.service';

@Component({
  selector: 'app-order-history',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './order-history.html',
  styleUrl: './order-history.css',
})
export class OrderHistory {
  orders: Order[] = [];
  expandedOrders: Set<string> = new Set();

  constructor(
    private orderService: OrderService, 
    private router: Router,
    private i18nService: I18nService
  ) {
    this.loadOrders();
  }

  loadOrders(): void {
    this.orders = this.orderService.getOrders();
  }

  toggleOrder(orderId: string): void {
    if (this.expandedOrders.has(orderId)) {
      this.expandedOrders.delete(orderId);
    } else {
      this.expandedOrders.add(orderId);
    }
  }

  isOrderExpanded(orderId: string): boolean {
    return this.expandedOrders.has(orderId);
  }

  deleteOrder(orderId: string): void {
    if (confirm('确定要删除这个订单吗？')) {
      const success = this.orderService.deleteOrder(orderId);
      if (success) {
        this.loadOrders();
        alert('订单已删除');
      }
    }
  }

  formatPrice(price: number): string {
    return `¥${price.toLocaleString()}`;
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  getStatusText(status: string): string {
    const key = `orderHistory.status.${status}`;
    const translated = this.i18nService.translate(key);
    return translated || status; // fallback to status if translation not found
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'completed':
        return 'status-completed';
      case 'pending':
        return 'status-pending';
      case 'cancelled':
        return 'status-cancelled';
      default:
        return '';
    }
  }

  getTotalOrders(): number {
    return this.orderService.getOrderCount();
  }

  getTotalSpent(): number {
    return this.orderService.getTotalSpent();
  }

  getTotalSavings(): number {
    return this.orderService.getTotalSavings();
  }

  navigateToPricing(): void {
    this.router.navigate(['/ski-pricing']);
  }
}
