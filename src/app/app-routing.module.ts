import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoicesListComponent } from './invoices-list/invoices-list.component';
import { PaymentsListComponent } from './payments-list/payments-list.component';

const routes: Routes = [
  { path: "payments/:id", component: PaymentsListComponent },
  { path: "", component: InvoicesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
