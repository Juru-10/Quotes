import { Directive, ElementRef, HostListener } from '@angular/core';
import { Quote } from './quote'

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) {

  }

  // @HostListener() green(index){
  //   if(this.quote.upvotes==Math.max(this.quotes[index].upvotes)){
  //   this.textDecor("green");
  //   }
  // }
  //
  // @HostListener() red(index){
  //   if(this.quote.upvotes==Math.max(this.quotes[index].upvotes)){
  //   this.textDecor("red");
  //   }
  // }

  private textDecor(action:string){
    this.elem.nativeElement.style.textDecoration=action;
  }

}
