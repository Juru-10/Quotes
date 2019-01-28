import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.sass']
})
export class QuoteComponent implements OnInit {

  quotes = [
        new Quote(1, 'Life', 'Take life easy or it takes you easy.', 'Myself', 'Me', 3,1,new Date(2019,0,10)),
        new Quote(2, 'Time', 'Time is a part of life;take it preciously.', 'Myself', 'Me', 4,2,new Date(2019,0,5)),
        new Quote(3, 'Sunshine', 'When you can’t find the sunshine, be the sunshine.', 'Anonymous', 'Me', 5,3,new Date(2019,0,1))
  ]

  addNewQuote(quote){
    let quoteLength=this.quotes.length;
    quote.id=quoteLength+1;
    quote.timerDate=new Date(quote.timerDate)
    this.quotes.push(quote)
  }

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
