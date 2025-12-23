import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService, Theme, ThemeConfig } from '../services/theme.service';
import { I18nService } from '../services/i18n.service';

@Component({
  selector: 'app-theme-selector',
  imports: [CommonModule],
  templateUrl: './theme-selector.html',
  styleUrl: './theme-selector.css'
})
export class ThemeSelector {
  private themeService = inject(ThemeService);
  private i18nService = inject(I18nService);
  
  currentTheme: Theme = 'auto';
  themes: Record<Theme, ThemeConfig>;
  isOpen = false;

  constructor() {
    this.currentTheme = this.themeService.getCurrentTheme();
    this.themes = this.themeService.getAllThemes();
    
    // 监听主题变化
    this.themeService.getThemeChanges().subscribe(theme => {
      this.currentTheme = theme;
    });
  }

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  selectTheme(themeKey: string): void {
    this.themeService.setTheme(themeKey as Theme);
    this.isOpen = false;
  }

  getThemeDisplayName(themeKey: string): string {
    return this.i18nService.translate(`theme.${themeKey}.label`);
  }

  getThemeDescription(themeKey: string): string {
    return this.i18nService.translate(`theme.${themeKey}.description`);
  }

  getCurrentThemeIcon(): string {
    return this.themes[this.currentTheme].icon;
  }

  getCurrentThemeName(): string {
    return this.getThemeDisplayName(this.currentTheme);
  }

  // 点击外部关闭下拉菜单的方法将由 ClickOutsideDirective 调用
  closeDropdown(): void {
    this.isOpen = false;
  }

  // trackBy 函数用于优化 *ngFor 性能
  trackByThemeFn(index: number, theme: any): string {
    return theme.key;
  }
}