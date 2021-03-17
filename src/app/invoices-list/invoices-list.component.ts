import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InvoicesService } from '../invoices.service';
import { Invoice } from '../models/invoice';
import { map } from 'rxjs/operators';
import { Payment } from '../models/payment';

@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.css']
})
export class InvoicesListComponent implements OnInit {

  invoices: Invoice[];
  payments: Payment[];

  constructor(private invoicesService: InvoicesService) { }

  ngOnInit(): void {
    this.invoicesService.getInvoices().subscribe(
      (inv: Invoice[])=> this.invoices = inv,
      (err) => console.log(err)
    );
    this.invoicesService.getPayments().subscribe(
      (pay: Payment[]) => {
        this.payments = pay;
      },
      (err) => console.log(err)
    );
  }

  totalPayments(invoiceId):number {
    let total = 0;
    let pays = this.payments.filter((p)=> p.invoiceId === invoiceId);
    pays.forEach((p)=> {
      total += p.paidValue;
    })
    return total;
  }


}
