import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import {MatAccordion} from '@angular/material/expansion';
import { Router } from '@angular/router';
import { MenuService } from '../shared/menu.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  tabs = ['First', 'Second', 'Third'];
  selected = new FormControl(0);
  name = 'Angular';
  tabIndex = 0 ;
  selectedItem = null;
  products: any
  totalcartvalue = 0;
  value
  conditionToDisaply=false
  orders = []
  items = [
    {key: "Item 1", name: "Anil Pancholi",address:'C17 LIG Main Road',City:'Indore Madhy Pardesh',Mobile:'9999999999',email:'it@imast.in'},
    {key: "Item 2", name: "Anil Pancholi",address:'C17 LIG Main Road',City:'Indore Madhy Pardesh',Mobile:'9999999999',email:'it@imast.in'},
    {key: "Item 3", name: "Anil Pancholi",address:'C17 LIG Main Road',City:'Indore Madhy Pardesh',Mobile:'9999999999',email:'it@imast.in'},
  ]
 
  count: any = 0;
  
  getQuantityspeak: any;
  conditionToDisaplyspeak: boolean;

  constructor(public router:Router,private productservice: MenuService) { 
    this.products = productservice.products
  }

  ngOnInit(): void {
  
  }
  onSelectionChange(event) {
    console.log('onSelectionChange exit:hhhhh ',this.selectedItem);
}
onAdd(){

}


getQuantity(i)
{
  for(let orders of  this.productservice.orders)
  {
      if(orders.indexVal==i)
      {
        return orders.quantity
      }
  }
}
addToCart(indexValue,propductId){
 //conditions to display +  and - buttons
 
   //Add to cart 


   this.totalcartvalue +=1 ;
   //console.log(this.totalcartvalue + "cart value dsgsg")
   let count = 1
   let push = true
   //console.log(indexValue + "   " + propductId)
   if (this.products[indexValue].quantity == 0) {
   
     return

   }
  
   for (let ords of  this.productservice.orders) {
    
     if (ords.indexVal == indexValue) {
      
       ords.quantity++;
       push = false
       this.conditionToDisaply=true

     }
   }
   if (push) {
      this.productservice.orders.push({ "indexVal": indexValue, "quantity": count })
     this.conditionToDisaply=true
   }
   this.products[indexValue].quantity--;

 this.productservice.sendTotal(this.totalcartvalue);

  }

  removeFromCart(indexValue, propductId)
  {
    this.totalcartvalue-=1;
     this.products[indexValue].quantity++;
     for( let ord of  this.productservice.orders)
     {
       if(ord.indexVal==indexValue)
       {
         ord.quantity-=1
       }
     }

     //this.snackBar.open( "  Removed From Cart  ",this.products[indexValue].name, { duration: 2000, })
     this.productservice.sendTotal(this.totalcartvalue)
     
  

  }
  show(){
    this.router.navigate(['/carddetails']);
  }
  changeTab(event){
    console.log(event.index)
    this.tabIndex = event.index;
  }
}
