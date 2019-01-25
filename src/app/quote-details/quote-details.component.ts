import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.sass']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote:Quote;
  @Output() isDelete = new EventEmitter<boolean>();

  upvotes=0;
  downvotes=0;

  upvote(upvotes,index){
    let,
    upvotes+=1;
  }

  downvote(downvotes,index){
    let,
    downvotes+=1;
  }

  quoteDelete(deleteIt:boolean){
    this.isDelete.emit(deleteIt);
  }
  constructor() { }

  ngOnInit() {
  }

}
