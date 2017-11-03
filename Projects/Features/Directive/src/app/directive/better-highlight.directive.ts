import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {

  }

  @HostListener('mouseenter') mouseEnter(event: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor' , 'blue');
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseLeave(event: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor' , 'transparent');
    this.backgroundColor = 'transparent';
  }
}
