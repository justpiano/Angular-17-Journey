import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appCustom]',
  standalone: true
})
export class CustomDirective {
  private el = inject(ElementRef);
  
  constructor() {
    this.el.nativeElement.style.background = 'cyan';
    this.el.nativeElement.style.width = '180px';
    console.log('yellow: ', 'yellow');
  }
}
