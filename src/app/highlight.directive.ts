import { Directive, ElementRef, HostListener } from '@angular/core';
// import { Quote } from './quote'

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) {
    // if (quote.upvotes==Math.max(quote.upvotes)){
    //   this.textDecor("line-through")
    // }
  }

  // @HostListener("click") onClicks(){
  //   this.textDecor("line-through")
  // }
  //
  // @HostListener("dbclick") onDoubleClicks(){
  //   this.textDecor("None")
  // }

  private textDecor(action:string){
    this.elem.nativeElement.style.textDecoration=action;
  }

}
