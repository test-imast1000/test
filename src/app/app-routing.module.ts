import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardDetailsComponent } from './card-details/card-details.component';

import { OrderComponent } from './order/order.component';


const routes: Routes = [
  {path:'', redirectTo:'order', pathMatch:'full'},
  {path:'order', component: OrderComponent},
  {path:'carddetails', component: CardDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
