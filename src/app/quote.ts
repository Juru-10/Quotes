export class Quote {
  public showDetails:boolean;
  public total:number[];
  constructor(public id:number, public ttl:string, public details:string, public author:string, public writer:string,public upvotes:number=0,public downvotes:number=0, public timerDate:Date){
    this.showDetails=false;
    // this.total= [];
    // addArray (){
      this.total.push(this.upvotes);
    // }
  }
}
