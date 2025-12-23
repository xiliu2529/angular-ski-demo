import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type Theme = 'light' | 'dark' | 'auto';

export interface ThemeConfig {
  name: string;
  icon: string;
  cssClass: string;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme = signal<Theme>('auto');
  private systemTheme = signal<'light' | 'dark'>('light');
  private themeSubject = new BehaviorSubject<Theme>('auto');

  private themes: Record<Theme, ThemeConfig> = {
    light: {
      name: 'light',
      icon: '☀️',
      cssClass: 'light-theme'
    },
    dark: {
      name: 'dark',
      icon: '🌙',
      cssClass: 'dark-theme'
    },
    auto: {
      name: 'auto',
      icon: '🌓',
      cssClass: 'auto-theme'
    }
  };

  constructor() {
    this.loadInitialTheme();
    this.initializeSystemThemeDetection();
  }

  getCurrentTheme(): Theme {
    return this.currentTheme();
  }

  getActiveTheme(): 'light' | 'dark' {
    if (this.currentTheme() === 'auto') {
      return this.systemTheme();
    }
    return this.currentTheme() as 'light' | 'dark';
  }

  getThemeChanges(): Observable<Theme> {
    return this.themeSubject.asObservable();
  }

  getThemeConfig(theme: Theme): ThemeConfig {
    return this.themes[theme];
  }

  getAllThemes(): Record<Theme, ThemeConfig> {
    return this.themes;
  }

  setTheme(theme: Theme): void {
    if (this.currentTheme() === theme) return;
    
    this.currentTheme.set(theme);
    localStorage.setItem('preferred-theme', theme);
    
    this.updateThemeClass();
    this.themeSubject.next(theme);
  }

  toggleTheme(): void {
    const themes: Theme[] = ['light', 'dark', 'auto'];
    const currentIndex = themes.indexOf(this.currentTheme());
    const nextIndex = (currentIndex + 1) % themes.length;
    this.setTheme(themes[nextIndex]);
  }

  private loadInitialTheme(): void {
    const saved = localStorage.getItem('preferred-theme') as Theme;
    if (saved && ['light', 'dark', 'auto'].includes(saved)) {
      this.currentTheme.set(saved);
    } else {
      this.currentTheme.set('auto');
    }
    
    this.updateThemeClass();
    this.themeSubject.next(this.currentTheme());
  }

  private initializeSystemThemeDetection(): void {
    // 检测系统主题
    const detectSystemTheme = () => {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.systemTheme.set(prefersDark ? 'dark' : 'light');
      
      // 如果当前是自动模式，更新主题类
      if (this.currentTheme() === 'auto') {
        this.updateThemeClass();
      }
    };

    // 初始检测
    detectSystemTheme();

    // 监听系统主题变化
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // 现代浏览器
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', detectSystemTheme);
    } 
    // 兼容旧浏览器
    else if (mediaQuery.addListener) {
      mediaQuery.addListener(detectSystemTheme);
    }
  }

  private updateThemeClass(): void {
    const body = document.body;
    const activeTheme = this.getActiveTheme();
    
    // 移除所有主题类
    body.classList.remove('light-theme', 'dark-theme');
    
    // 添加当前主题类
    body.classList.add(`${activeTheme}-theme`);
    
    // 设置数据属性供CSS使用
    body.setAttribute('data-theme', activeTheme);
  }
}