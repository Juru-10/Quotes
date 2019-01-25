import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.sass']
})
export class QuoteComponent implements OnInit {

  quotes = [
        new Quote(1, 'Life,', 'Take it easy or it takes you easy', 'Me', 'Me', new Date(2019,0,10)),
        // new Quote(2, '', '', '', '', new Date()),
        // new Quote(3, '', '', '', '', new Date()),
        // new Quote(4, '', '', '', '', new Date()),
        // new Quote(5, '', '', '', '', new Date())
  ]

  addNewQuote(quote){
    let quoteLength=this.quotes.length;
    quote.id=quoteLength+1;
    quote.deleteDate=new Date(quote.deleteDate)
    this.quotes.push(quote)
  }
  //
  // like(upvotes,index){
  //   let upvotes+=1;
  // }
  //
  // dislike(downvotes,index){
  //   let downvotes+=1;
  // }

  deleteQuote(isDelete,index){
    if (isDelete){
      let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].ttl}`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
    }
  }

  toogleDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  constructor() { }

  ngOnInit() {
  }

}
