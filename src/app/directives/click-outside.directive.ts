import { Directive, ElementRef, EventEmitter, Output, inject } from '@angular/core';

@Directive({
  selector: '[clickOutside]',
  standalone: true
})
export class ClickOutsideDirective {
  private elementRef = inject(ElementRef);
  @Output() clickOutside = new EventEmitter<void>();

  constructor() {
    setTimeout(() => {
      document.addEventListener('click', this.onClick.bind(this), true);
    });
  }

  private onClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.clickOutside.emit();
    }
  }

  ngOnDestroy(): void {
    document.removeEventListener('click', this.onClick.bind(this), true);
  }
}