import { Component, signal } from '@angular/core';
// Component：用于定义 Angular 组件
// signal：Angular 的响应式状态（替代部分 RxJS / 普通变量）

import { CommonModule } from '@angular/common';
// CommonModule：提供 *ngIf、*ngFor 等常用指令

import { I18nService, Language } from '../services/i18n.service';
// I18nService：国际化服务，用于切换和获取语言
// Language：语言类型（通常是 'zh' | 'en' | 'ja' 这样的联合类型）

import { TranslatePipe } from '../pipes/translate.pipe';
// TranslatePipe：自定义翻译管道，用于在模板中做多语言转换

import { ClickOutsideDirective } from '../directives/click-outside.directive';
// ClickOutsideDirective：自定义指令，用于监听“点击组件外部”事件

@Component({
  selector: 'app-language-selector',
  // 组件选择器
  // 使用方式：<app-language-selector></app-language-selector>

  imports: [CommonModule, TranslatePipe, ClickOutsideDirective],
  // standalone 组件的依赖声明
  // 这里引入：
  // - CommonModule：ngIf / ngFor
  // - TranslatePipe：翻译管道
  // - ClickOutsideDirective：点击外部关闭指令

  templateUrl: './language-selector.html',
  // 组件的 HTML 模板文件路径

  styleUrl: './language-selector.css'
  // 组件的样式文件路径
})
export class LanguageSelector {
  // 导出组件类，组件的逻辑都写在这里

  isOpen = signal(false);
  // 使用 signal 定义下拉框是否展开
  // false：关闭
  // true：打开

  currentLanguage = signal<Language>('ja');
  // 当前语言的 signal
  // 泛型 <Language> 用于限制语言值的类型
  // 默认语言为 'ja'

  languages = [
    // 语言列表，用于渲染下拉选项
    { code: 'zh' as Language, name: '中文', flag: '🇨🇳' },
    // 中文选项，code 强制断言为 Language 类型

    { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
    // 英文选项

    { code: 'ja' as Language, name: '日本語', flag: '🇯🇵' }
    // 日文选项
  ];

  constructor(private i18nService: I18nService) {
    // 通过构造函数注入 I18nService
    // private 表示自动生成并赋值为类属性

    this.currentLanguage.set(this.i18nService.getCurrentLanguage());
    // 从服务中获取当前语言
    // 并同步到 currentLanguage signal 中
  }

  toggleDropdown(): void {
    // 切换下拉框展开 / 关闭状态的方法

    this.isOpen.set(!this.isOpen());
    // 取反当前状态并重新设置
  }

  selectLanguage(language: Language): void {
    // 选择某个语言时触发的方法

    if (language !== this.currentLanguage()) {
      // 如果选择的语言和当前语言不同

      this.i18nService.setLanguage(language);
      // 调用服务切换全局语言

      this.currentLanguage.set(language);
      // 更新当前组件的语言状态
    }

    this.isOpen.set(false);
    // 无论是否切换语言，都关闭下拉框
  }

  closeDropdown(): void {
    // 点击外部时调用的方法（配合 ClickOutsideDirective）

    this.isOpen.set(false);
    // 关闭下拉框
  }

  getCurrentLanguageDisplay(): string {
    // 获取当前语言在 UI 中的显示文本（国旗 + 名称）

    const current = this.languages.find(
      lang => lang.code === this.currentLanguage()
    );
    // 在语言列表中查找当前语言对应的对象

    return current ? `${current.flag} ${current.name}` : '';
    // 如果找到则返回“🇯🇵 日本語”这样的字符串
    // 找不到则返回空字符串，避免报错
  }
}
