import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private elem:ElementRef) {this.elem.nativeElement.style.textDecoration='line-through'; }

  // @HostListener("click") onClicks(){
  //   this.textDecor("line-through")
  // }
  //
  // @HostListener("dbclick") onDoubleClicks(){
  //   this.textDecor("None")
  // }

  // private textDecor(action:string){
  //   this.elem.nativeElement.style.textDecoration=action;
  // }

}
