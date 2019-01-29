import { Directive, ElementRef, HostListener , Input} from '@angular/core';
import { Quote } from './quote'
import {QuoteComponent} from './quote/quote.component'

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() quote:Quote;

  ngOnInit() {
    }
}
