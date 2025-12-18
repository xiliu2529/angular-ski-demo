import { Pipe, PipeTransform, OnDestroy } from '@angular/core';
import { I18nService } from '../services/i18n.service';
import { Subscription } from 'rxjs';

@Pipe({
  name: 'translate',
  pure: false,
  standalone: true
})
export class TranslatePipe implements PipeTransform, OnDestroy {
  private lastKey: string = '';
  private lastParams: Record<string, string> | undefined;
  private lastValue: string = '';
  private subscription: Subscription;

  constructor(private i18nService: I18nService) {
    // 订阅翻译变化
    this.subscription = this.i18nService.getTranslationChanges().subscribe(() => {
      if (this.lastKey) {
        this.updateTranslation();
      }
    });
  }

  transform(key: string, params?: Record<string, string>): string {
    // 如果key或参数改变，更新翻译
    if (key !== this.lastKey || JSON.stringify(params) !== JSON.stringify(this.lastParams)) {
      this.lastKey = key;
      this.lastParams = params;
      this.updateTranslation();
    }
    return this.lastValue;
  }

  private updateTranslation(): void {
    this.lastValue = this.i18nService.translate(this.lastKey, this.lastParams);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}