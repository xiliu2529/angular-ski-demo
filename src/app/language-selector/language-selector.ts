import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService, Language } from '../services/i18n.service';
import { TranslatePipe } from '../pipes/translate.pipe';
import { ClickOutsideDirective } from '../directives/click-outside.directive';

@Component({
  selector: 'app-language-selector',
  imports: [CommonModule, TranslatePipe, ClickOutsideDirective],
  templateUrl: './language-selector.html',
  styleUrl: './language-selector.css'
})
export class LanguageSelector {
  isOpen = signal(false);
  currentLanguage = signal<Language>('ja');

  languages = [
    { code: 'zh' as Language, name: '中文', flag: '🇨🇳' },
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
    { code: 'ja' as Language, name: '日本語', flag: '🇯🇵' }
  ];

  constructor(private i18nService: I18nService) {
    this.currentLanguage.set(this.i18nService.getCurrentLanguage());
  }

  toggleDropdown(): void {
    this.isOpen.set(!this.isOpen());
  }

  selectLanguage(language: Language): void {
    if (language !== this.currentLanguage()) {
      this.i18nService.setLanguage(language);
      this.currentLanguage.set(language);
    }
    this.isOpen.set(false);
  }

  closeDropdown(): void {
    this.isOpen.set(false);
  }

  getCurrentLanguageDisplay(): string {
    const current = this.languages.find(lang => lang.code === this.currentLanguage());
    return current ? `${current.flag} ${current.name}` : '';
  }
}