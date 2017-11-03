import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef) {
    console.log(this.elementRef);
  }

  ngOnInit() {
    console.log(this.elementRef);
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }

}
