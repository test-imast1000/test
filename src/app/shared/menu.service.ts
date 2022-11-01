import { Injectable } from '@angular/core';
// import {Subject} from 'rxjs/Subject';

@Injectable()
export class MenuService {
// public totalSubject = new Subject()
// public orderSubject = new Subject()
  constructor() {

      
   }
   
   orders=[]
   
  products=[
        {"id":"0",
          "product":"Apple Smart Watch",
          "quantity":2,
          "price":'Rate - 3999',
          "code":'P_SPR_001',
          "imgProduct":"../../assets/images/applewatch.jpg"
        },
        {"id":"1",
          "product":"Philipe Speaker",
          "quantity":5,
          "price":'Rate - 3999',
          "code":'P_SPR_001',
          "imgProduct":"../../assets/images/philipsespeaker.avif"
        }
      

 

    
  ]

  //products end

sendTotal(totalVal)

    { 
      
      
     // this.totalSubject.next(totalVal)
    }



//orders

// sendOrders(orders)
//   {
    
//     this.orderSubject.next(orders)
//     console.log(orders + "from service")
//   }
}