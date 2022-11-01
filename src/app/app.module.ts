import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material/material.module';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { OrderComponent } from './order/order.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { MenuService } from './shared/menu.service';


@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    CardDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    
    ToastrModule.forRoot()
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
