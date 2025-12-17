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
  protected readonly title = signal('スキー場情報サイト');
  
  // 导航菜单项
  navItems = [
    {   path: '/ski-resorts', label: 'スキー場一覧', description: '各スキー場の情報' },
    { path: '/ski-pricing', label: '料金表', description: '各スキー場の料金表' },
    { path: '/item-detail/1', label: '详情页示例', description: '路由参数传递' }
  ];
  
  currentYear = new Date().getFullYear();
  
  constructor(private router: Router) {}
  
  // 导航到指定路径
  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
