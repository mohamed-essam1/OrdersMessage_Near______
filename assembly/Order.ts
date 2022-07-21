import { u128 } from "near-sdk-as";

@nearBindgen
export class Order {
    message : string;
    sender : string;
    reciever : string;
    money : u128;

    constructor(message:string, sender:string, reciever:string, money:u128)
    {
        this.message=message;
        this.sender=sender;
        this.reciever=reciever;
        this.money=money;
    }
}