export class Payment {
    constructor(public invoiceId: string, public value: number, public paidValue: number, public paymentDate:string){}
}