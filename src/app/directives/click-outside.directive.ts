import { Directive, ElementRef, EventEmitter, Output, inject } from '@angular/core';
// 从 Angular 核心模块中导入：
// Directive：用于定义自定义指令
// ElementRef：用于获取宿主 DOM 元素
// EventEmitter：用于向外发送事件
// Output：声明组件/指令的输出事件
// inject：在非构造函数中注入依赖（Angular 新写法）

@Directive({
  selector: '[clickOutside]', 
  // 指令选择器：使用属性形式
  // 在模板中这样用：<div clickOutside></div>
  standalone: true
  // 声明为独立指令，不需要在 NgModule 中声明
})
export class ClickOutsideDirective {

  private elementRef = inject(ElementRef);
  // 注入 ElementRef，用来获取当前指令所附着的 DOM 元素
  // elementRef.nativeElement 就是实际的 HTML 元素

  @Output() clickOutside = new EventEmitter<void>();
  // 定义一个输出事件 clickOutside
  // 当检测到“点击在元素外部”时，对外触发该事件

  constructor() {
    // 构造函数，在指令实例创建时执行

    setTimeout(() => {
      // 使用 setTimeout 推迟执行
      // 确保当前指令已经完全初始化并渲染完成

      document.addEventListener(
        'click',
        this.onClick.bind(this),
        true
      );
      // 给 document 注册 click 事件监听
      // this.onClick.bind(this)：绑定 this，确保 onClick 中能访问当前指令实例
      // 第三个参数 true 表示使用「捕获阶段」
    });
  }

  private onClick(event: MouseEvent): void {
    // 点击事件处理函数
    // event 是浏览器原生的鼠标事件对象

    if (!this.elementRef.nativeElement.contains(event.target)) {
      // 判断点击的目标元素是否不在当前元素内部
      // contains：判断某个节点是否是当前节点的子节点

      this.clickOutside.emit();
      // 如果点击发生在外部，触发 clickOutside 事件
    }
  }

  ngOnDestroy(): void {
    // 生命周期钩子
    // 当指令被销毁（如组件卸载）时调用

    document.removeEventListener(
      'click',
      this.onClick.bind(this),
      true
    );
    // 移除 document 上的 click 事件监听
    // ⚠️ 注意：这里 bind(this) 会生成新的函数引用，实际可能移除失败
  }
}
