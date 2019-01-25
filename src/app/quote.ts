export class Quote {
  public showDetails:boolean;
  constructor(public id:number, public ttl:string, public details:string, public author:string, public writer:string, public deleteDate:Date){
    this.showDetails=false
  }
}
