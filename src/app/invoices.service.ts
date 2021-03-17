import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from './models/payment';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  url ='http://localhost:900';

  constructor(private http: HttpClient) { }

  getInvoices():Observable<any> {
    return this.http.get(this.url + '/invoices');
  }

  getPayments(): Observable<any> {
    return this.http.get(this.url + '/payments');
  }

  getPaymentsOfInvoice(id: string): Observable<any> {
    return this.http.get(this.url + '/payments/' + id);
  }

  updatePayment(payment: Payment):Observable<any>{
    let body = {
      "value": payment.value,
      "paidValue": payment.paidValue,
      "paymentDate": payment.paymentDate
    }
    return this.http.put(this.url + '/payments/' + payment.id, body);
  }
}
