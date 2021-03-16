import { Component, OnInit } from '@angular/core';
import { InvoicesService } from '../invoices.service';
import { Invoice } from '../models/invoice';

@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.css']
})
export class InvoicesListComponent implements OnInit {

  invoices: Invoice[];

  constructor(private invoicesService: InvoicesService) { }

  ngOnInit(): void {
    this.invoicesService.getInvoices().subscribe(
      (inv: Invoice[])=> this.invoices = inv,
      (err) => console.log(err)
    );
  }


}
