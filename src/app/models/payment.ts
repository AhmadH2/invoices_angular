export class Payment {
    constructor(public id: string, public invoiceId: string, public value: number, public paidValue: number, public paymentDate:string){}
}