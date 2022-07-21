import {Context,PersistentVector , u128} from "near-sdk-as";
import { Order } from "./Order";
import"typedarray"
@nearBindgen
export class Contract {
  //writeSomething
  RequestingList:PersistentVector<Order> = new PersistentVector<Order>("m");
  @mutateState()
  OrderMessage(message:string , toWhom:string, money:u128):Order
  {    
    let balance: u128 = Context.accountBalance
    let sender:string = Context.sender;
    let request:Order = new Order(message,sender,toWhom,money);

    if(money>balance)
      request.message ="Not enough balance, your Balance: "+balance.toString();
    else
      request.message ="a valid request, your Balance: "+balance.toString();
    this.RequestingList.pushBack(request);
    return request;
  }

  //Orders_list_():PersistentVector<Requests>
  //{
    //return this.RequestingList; //return info abot list only
  //}

  Orders_list():Array<Order>
  {
    let size = this.RequestingList.length;
    let requests = new Array <Order>(size);
    for (let i=0 ;i<size ; i++)
    {
        requests[i]=this.RequestingList[i];

    }
    return requests;
  }

}