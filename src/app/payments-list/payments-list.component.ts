import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvoicesService } from '../invoices.service';
import { Payment } from '../models/payment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payments-list',
  templateUrl: './payments-list.component.html',
  styleUrls: ['./payments-list.component.css']
})
export class PaymentsListComponent implements OnInit {

  payments: Payment[];
  id: string;
  payFrom: any;
  // payment = new Payment('', 0, 0, '');

  constructor(private invoicesService: InvoicesService, 
    private route: ActivatedRoute, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (d) => { 
        this.id = d['id'];
        this.invoicesService.getPaymentsOfInvoice(d['id']).subscribe(
          (pays: Payment[]) => this.payments = pays,
          (err) => console.log(err)
        );
      },
    );

    this.payFrom = new FormGroup({
      value: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
      paidValue: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
      date: new FormControl('', [Validators.required]),
    })
  }

  get value() { return this.payFrom.get('value'); }
  get paidValue() { return this.payFrom.get('paidValue'); }
  get date() { return this.payFrom.get('date'); }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

}
