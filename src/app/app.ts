import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslatePipe } from './pipes/translate.pipe';
import { LanguageSelector } from './language-selector/language-selector';
import { ThemeSelector } from './theme-selector/theme-selector';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, TranslatePipe, LanguageSelector, ThemeSelector],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  currentYear = new Date().getFullYear();
  
  constructor(private router: Router) {}
  
  // 导航到指定路径
  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
