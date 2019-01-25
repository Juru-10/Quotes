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

  // upvote(upvotes: any){
  //   var upvotes=0;
  //   this.upvotes+=1;
  // }
  //
  // downvote(downvotes: any){
  //   var downvotes=0;
  //   this.downvotes+=1;
  // }

  quoteDelete(deleteIt:boolean){
    this.isDelete.emit(deleteIt);
  }
  constructor() { }

  ngOnInit() {
  }

}
