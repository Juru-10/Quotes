import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) {}

  @HostListener("click") onClicks(){
    this.textDecor("line-through")
  }

  @HostListener("dbclick") onDoubleClicks(){
    this.textDecor("None")
  }

  private textDecor(action:string){
    this.elem.nativeElement.style.textDecoration=action;
  }

}
