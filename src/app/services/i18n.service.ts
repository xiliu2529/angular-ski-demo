import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type Language = 'zh' | 'en' | 'ja';

export interface Translation {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  private currentLanguage = signal<Language>('ja');
  private translations = signal<Record<Language, Translation>>({
    zh: {
      "app": {
        "title": "滑雪场预订系统",
        "footer": {
          "copyright": "© {{year}} 滑雪场预订系统",
          "description": "日本滑雪场信息·价格表·预订管理平台"
        }
      },
      "navigation": {
        "resorts": {
          "label": "滑雪场列表",
          "description": "各滑雪场的信息"
        },
        "pricing": {
          "label": "价格表",
          "description": "各滑雪场的价格表"
        },
        "history": {
          "label": "订单历史",
          "description": "购买历史确认"
        }
      },
      "resorts": {
        "title": "日本滑雪场推荐",
        "subtitle": "发现日本最优质的滑雪胜地，享受完美的滑雪体验",
        "viewDetails": "查看详情",
        "location": "📍",
        "resorts": {
          "nekoma": {
            "name": "猫魔滑雪场",
            "location": "福岛县",
            "description": "雪质优秀，适合中高级滑雪者",
            "features": "粉雪圣地，非压雪区域丰富，越野滑雪线路完善",
            "season": "12月下旬 - 4月上旬，最佳雪期1-3月",
            "transportation": "JR只见线会津川口站转巴士，自驾约3小时",
            "difficulty": "初级 20% | 中级 40% | 高级 40%"
          },
          "zaou": {
            "name": "藏王温泉滑雪场",
            "location": "山形县",
            "description": "以树冰闻名，适合观光与滑雪",
            "features": "世界罕见的树冰奇观，温泉滑雪完美结合",
            "season": "12月 - 5月黄金周，树冰观赏期12-2月",
            "transportation": "山形新干线山形站转巴士，自驾约2.5小时",
            "difficulty": "初级 35% | 中级 45% | 高级 20%"
          }
        }
      },
      "pricing": {
        "title": "雪场票价表",
        "subtitle": "选择您需要的滑雪票券，享受优惠价格",
        "headers": {
          "select": "选择",
          "resort": "雪场",
          "ticket": "票种",
          "duration": "时长",
          "price": "价格",
          "discount": "折扣",
          "period": "有效期",
          "features": "特色"
        },
        "cart": {
          "title": "已选择的票券",
          "originalTotal": "原价总计:",
          "savings": "节省金额:",
          "total": "实付金额:",
          "buyNow": "立即购买",
          "items": "项",
          "delete": "删除"
        },
        "checkout": {
          "title": "确认订单",
          "cancel": "取消",
          "confirm": "确认购买",
          "total": "总计"
        }
      },
      "orderHistory": {
        "title": "订单历史",
        "subtitle": "查看您的滑雪票购买记录",
        "stats": {
          "totalOrders": "总订单数",
          "totalSpent": "总消费金额",
          "totalSavings": "总节省金额"
        },
        "empty": {
          "title": "暂无订单记录",
          "subtitle": "您还没有购买任何滑雪票券",
          "goShopping": "去购买"
        },
        "order": {
          "id": "订单号：",
          "delete": "删除订单",
          "quantity": "数量：",
          "originalTotal": "原价总计：",
          "savings": "节省金额：",
          "total": "实付金额："
        },
        "status": {
          "completed": "已完成",
          "pending": "待处理",
          "cancelled": "已取消",
          "unknown": "未知状态"
        }
      },
      "language": {
        "select": "选择语言",
        "chinese": "中文",
        "english": "English",
        "japanese": "日本語"
      },
      "common": {
        "loading": "加载中...",
        "error": "错误",
        "success": "成功",
        "cancel": "取消",
        "confirm": "确认",
        "back": "返回",
        "next": "下一步",
        "save": "保存",
        "delete": "删除",
        "edit": "编辑"
      }
    },
    en: {
      "app": {
        "title": "Ski Resort Booking System",
        "footer": {
          "copyright": "© {{year}} Ski Resort Booking System",
          "description": "Japan ski resort information · pricing · booking management platform"
        }
      },
      "navigation": {
        "resorts": {
          "label": "Ski Resorts",
          "description": "Information about each ski resort"
        },
        "pricing": {
          "label": "Pricing",
          "description": "Pricing tables for each ski resort"
        },
        "history": {
          "label": "Order History",
          "description": "View purchase history"
        }
      },
      "resorts": {
        "title": "Japan Ski Resort Recommendations",
        "subtitle": "Discover Japan's finest ski destinations for the perfect skiing experience",
        "viewDetails": "View Details",
        "location": "📍",
        "resorts": {
          "nekoma": {
            "name": "Nekoma Ski Resort",
            "location": "Fukushima Prefecture",
            "description": "Excellent snow quality, suitable for intermediate and advanced skiers",
            "features": "Powder snow paradise, abundant ungroomed areas, excellent cross-country routes",
            "season": "Late December - Early April, best snow period January-March",
            "transportation": "JR Tadami Line Aizu-Kawaguchi Station transfer bus, ~3 hours by car",
            "difficulty": "Beginner 20% | Intermediate 40% | Advanced 40%"
          },
          "zaou": {
            "name": "Zao Onsen Ski Resort",
            "location": "Yamagata Prefecture",
            "description": "Famous for ice trees, perfect for sightseeing and skiing",
            "features": "World's rare ice tree spectacle, perfect combination of hot springs and skiing",
            "season": "December - Golden Week early May, ice tree viewing period December-February",
            "transportation": "Yamagata Shinkansen Yamagata Station transfer bus, ~2.5 hours by car",
            "difficulty": "Beginner 35% | Intermediate 45% | Advanced 20%"
          }
        }
      },
      "pricing": {
        "title": "Ski Resort Pricing",
        "subtitle": "Choose your ski tickets and enjoy discounted prices",
        "headers": {
          "select": "Select",
          "resort": "Resort",
          "ticket": "Ticket Type",
          "duration": "Duration",
          "price": "Price",
          "discount": "Discount",
          "period": "Valid Period",
          "features": "Features"
        },
        "cart": {
          "title": "Selected Tickets",
          "originalTotal": "Original Total:",
          "savings": "Savings:",
          "total": "Total Amount:",
          "buyNow": "Buy Now",
          "items": "items",
          "delete": "Delete"
        },
        "checkout": {
          "title": "Confirm Order",
          "cancel": "Cancel",
          "confirm": "Confirm Purchase",
          "total": "Total"
        }
      },
      "orderHistory": {
        "title": "Order History",
        "subtitle": "View your ski ticket purchase records",
        "stats": {
          "totalOrders": "Total Orders",
          "totalSpent": "Total Spent",
          "totalSavings": "Total Savings"
        },
        "empty": {
          "title": "No Order Records",
          "subtitle": "You haven't purchased any ski tickets yet",
          "goShopping": "Go Shopping"
        },
        "order": {
          "id": "Order ID: ",
          "delete": "Delete Order",
          "quantity": "Quantity: ",
          "originalTotal": "Original Total: ",
          "savings": "Savings: ",
          "total": "Total Amount: "
        },
        "status": {
          "completed": "Completed",
          "pending": "Pending",
          "cancelled": "Cancelled",
          "unknown": "Unknown Status"
        }
      },
      "language": {
        "select": "Select Language",
        "chinese": "中文",
        "english": "English",
        "japanese": "日本語"
      },
      "common": {
        "loading": "Loading...",
        "error": "Error",
        "success": "Success",
        "cancel": "Cancel",
        "confirm": "Confirm",
        "back": "Back",
        "next": "Next",
        "save": "Save",
        "delete": "Delete",
        "edit": "Edit"
      }
    },
    ja: {
      "app": {
        "title": "スキー場予約システム",
        "footer": {
          "copyright": "© {{year}} スキー場予約システム",
          "description": "日本のスキー場情報・料金表・予約管理プラットフォーム"
        }
      },
      "navigation": {
        "resorts": {
          "label": "スキー場一覧",
          "description": "各スキー場の情報"
        },
        "pricing": {
          "label": "料金表",
          "description": "各スキー場の料金表"
        },
        "history": {
          "label": "注文履歴",
          "description": "購入履歴の確認"
        }
      },
      "resorts": {
        "title": "日本スキー場おすすめ",
        "subtitle": "日本最高品質のスキーリゾートを発見し、完璧なスキー体験をお楽しみください",
        "viewDetails": "詳細を見る",
        "location": "📍",
        "resorts": {
          "nekoma": {
            "name": "猫魔スキー場",
            "location": "福島県",
            "description": "雪質が優秀で、中・上級者に適している",
            "features": "パウダースノーの聖地、圧雪されていないエリアが豊富、クロスカントリーコースが充実",
            "season": "12月下旬 - 4月上旬、最適雪期は1-3月",
            "transportation": "JR只见線会津川口駅からバス、車で約3時間",
            "difficulty": "初級 20% | 中級 40% | 上級 40%"
          },
          "zaou": {
            "name": "蔵王温泉スキー場",
            "location": "山形県",
            "description": "樹氷で有名で、観光とスキーに最適",
            "features": "世界でも珍しい樹氷の奇観、温泉スキーの完璧な組み合わせ",
            "season": "12月 - ゴールデンウィーク5月上旬、樹氷観賞期は12-2月",
            "transportation": "山形新幹線山形駅からバス、車で約2.5時間",
            "difficulty": "初級 35% | 中級 45% | 上級 20%"
          }
        }
      },
      "pricing": {
        "title": "スキー場料金表",
        "subtitle": "必要なスキーチケットを選択し、割引価格をお楽しみください",
        "headers": {
          "select": "選択",
          "resort": "スキー場",
          "ticket": "チケット種類",
          "duration": "期間",
          "price": "価格",
          "discount": "割引",
          "period": "有効期間",
          "features": "特色"
        },
        "cart": {
          "title": "選択されたチケット",
          "originalTotal": "元の合計:",
          "savings": "節約額:",
          "total": "支払額:",
          "buyNow": "今すぐ購入",
          "items": "項目",
          "delete": "削除"
        },
        "checkout": {
          "title": "注文確認",
          "cancel": "キャンセル",
          "confirm": "購入確定",
          "total": "合計"
        }
      },
      "orderHistory": {
        "title": "注文履歴",
        "subtitle": "スキーチケットの購入記録を確認",
        "stats": {
          "totalOrders": "総注文数",
          "totalSpent": "総支払額",
          "totalSavings": "総節約額"
        },
        "empty": {
          "title": "注文記録がありません",
          "subtitle": "まだスキーチケットを購入していません",
          "goShopping": "購入へ"
        },
        "order": {
          "id": "注文番号：",
          "delete": "注文を削除",
          "quantity": "数量：",
          "originalTotal": "元の合計：",
          "savings": "節約額：",
          "total": "支払額："
        },
        "status": {
          "completed": "完了",
          "pending": "処理中",
          "cancelled": "キャンセル済み",
          "unknown": "不明なステータス"
        }
      },
      "language": {
        "select": "言語を選択",
        "chinese": "中文",
        "english": "English",
        "japanese": "日本語"
      },
      "common": {
        "loading": "読み込み中...",
        "error": "エラー",
        "success": "成功",
        "cancel": "キャンセル",
        "confirm": "確認",
        "back": "戻る",
        "next": "次へ",
        "save": "保存",
        "delete": "削除",
        "edit": "編集"
      }
    }
  });
  
  private translationSubject = new BehaviorSubject<Translation>({});

  constructor() {
    this.loadInitialLanguage();
    this.initializeTranslations();
  }

  getCurrentLanguage(): Language {
    return this.currentLanguage();
  }

  getTranslationChanges(): Observable<Translation> {
    return this.translationSubject.asObservable();
  }

  async setLanguage(language: Language): Promise<void> {
    if (this.currentLanguage() === language) return;
    
    this.currentLanguage.set(language);
    localStorage.setItem('preferred-language', language);
    
    this.translationSubject.next(this.translations()[language]);
  }

  translate(key: string, params?: Record<string, string>): string {
    const translation = this.translations()[this.currentLanguage()];
    
    const value = this.getNestedValue(translation, key);
    
    if (!value) {
      console.warn(`Translation key not found: ${key} for language: ${this.currentLanguage()}`);
      return key;
    }
    
    if (params) {
      return this.interpolate(value, params);
    }
    
    return value;
  }

  private initializeTranslations(): void {
    console.log('Initializing translations with built-in data');
    this.translationSubject.next(this.translations()[this.currentLanguage()]);
    
    // 异步加载外部翻译文件来更新内置翻译
    this.loadExternalTranslations();
  }

  private async loadExternalTranslations(): Promise<void> {
    const languages: Language[] = ['zh', 'en', 'ja'];
    const currentTranslations = this.translations();
    
    try {
      const promises = languages.map(async (lang) => {
        try {
          const response = await fetch(`/assets/i18n/${lang}.json`);
          if (response.ok) {
            const externalTranslation = await response.json();
            currentTranslations[lang] = { ...currentTranslations[lang], ...externalTranslation };
            console.log(`Updated ${lang} translations from external file`);
          }
        } catch (error) {
          console.warn(`Could not load external translation for ${lang}:`, error);
        }
      });

      await Promise.all(promises);
      this.translations.set(currentTranslations);
      this.translationSubject.next(currentTranslations[this.currentLanguage()]);
      console.log('All translations processed');
    } catch (error) {
      console.error('Failed to process external translations:', error);
    }
  }

  private loadInitialLanguage(): void {
    const saved = localStorage.getItem('preferred-language') as Language;
    if (saved && ['zh', 'en', 'ja'].includes(saved)) {
      this.currentLanguage.set(saved);
    } else {
      const browserLang = navigator.language.split('-')[0] as Language;
      this.currentLanguage.set(['zh', 'en', 'ja'].includes(browserLang) ? browserLang : 'ja');
    }
  }

  private getNestedValue(obj: any, key: string): string {
    return key.split('.').reduce((o, i) => o && o[i], obj);
  }

  private interpolate(template: string, params: Record<string, string>): string {
    return template.replace(/\{\{(\w+)\}\}/g, (match, param) => params[param] || match);
  }
}