import { Component, OnInit, Input, Output, EventEmitter,  } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.sass']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote:Quote;
  @Output() isDelete = new EventEmitter<boolean>();
constructor() { }
  upvote(){
    this.quote.upvotes+=1;
    this.total.push(this.quote.updates)
    // if(this.quote.upvotes==Math.max(this.quotes[index].upvotes)){
    //   this.elem.nativeElement.style.textDecoration='green';
    //       // this.onHighlighter1();
    //     }
  }

  downvote(){
    this.quote.downvotes+=1;
  }

  quoteDelete(deleteIt:boolean){
    this.isDelete.emit(deleteIt);
  }


  ngOnInit() {}

}
