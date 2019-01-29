import { Directive, ElementRef, HostListener , Input} from '@angular/core';
import { Quote } from './quote'
import {QuoteComponent} from './quote/quote.component'

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() quote:Quote;
  public total:number[];
  constructor(private elem:ElementRef) {
    this.total.push(this.upvotes);
  }
  private textDecor(color:string){
    this.elem.nativeElement.style.textDecoration=color;
  }



    @HostListener("click") OnClicks(){
      total[index]=this.quote.updates;
      this.total.push(this.quote.updates);
      if(Math.max(this.total)){
        this.textDecor("green");
      }
    }



  // @HostListener("click") OnClicks(){
  //   console.log(QuoteComponent.name)
  //   this.textDecor("green");
  // }
  // @HostListener("highlighter") onHighlighter2(){
  //   this.textDecor("red");
  // }



}
