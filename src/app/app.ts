import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('スキー場予約システム');
  
  // 导航菜单项
  navItems = [
    {   path: '/ski-resorts', label: 'スキー場一覧', description: '各スキー場の情報' },
    { path: '/ski-pricing', label: '料金表', description: '各スキー場の料金表' },
    { path: '/order-history', label: '注文履歴', description: '購入履歴の確認' }
  ];
  
  currentYear = new Date().getFullYear();
  
  constructor(private router: Router) {}
  
  // 导航到指定路径
  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
