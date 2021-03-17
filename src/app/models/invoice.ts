export class Invoice {
    public totalPay = 0;
    constructor(public customerName:string, public value:number, creationDate:string, descr?:string){}
}
