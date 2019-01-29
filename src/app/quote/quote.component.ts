import { Component, OnInit ,Input } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.sass']
})
export class QuoteComponent implements OnInit {
  @Input() quote:Quote;
  quotes = [
        new Quote(1, 'Life', 'Take life easy or it takes you easy.', 'Myself', 'Me', 0,0,new Date(2019,0,10)),
        new Quote(2, 'Time', 'Time is a part of life;take it preciously.', 'Myself', 'Me', 0,0,new Date(2019,0,5)),
        new Quote(3, 'Sunshine', 'When you can’t find the sunshine, be the sunshine.', 'Anonymous', 'Me', 0,0,new Date(2019,0,1))
  ]

  total=[]

  addNewQuote(quote){
    let quoteLength=this.quotes.length;
    quote.id=quoteLength+1;
    quote.timerDate=new Date(quote.timerDate)
    this.quotes.push(quote)
    this.total.push(this.quote.upvotes)
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

  highlight(index){
    if(this.quotes[index].upvotes>this.quotes[index].upvotes){

    }
  }

  constructor() { }

  ngOnInit() {
  }

}
