import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvoicesService } from '../invoices.service';
import { Payment } from '../models/payment';

@Component({
  selector: 'app-payments-list',
  templateUrl: './payments-list.component.html',
  styleUrls: ['./payments-list.component.css']
})
export class PaymentsListComponent implements OnInit {

  payments: Payment[];
  id: string;

  constructor(private invoicesService: InvoicesService, 
    private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (d) => { 
        this.id = d['id'];
        console.log(this.id);
        this.invoicesService.getPaymentsOfInvoice(d['id']).subscribe(
          (pays: Payment[]) => this.payments = pays,
          (err) => console.log(err)
        );
      },
    );
    
  }

}
