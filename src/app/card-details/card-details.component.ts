import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  addToCart(){
    this.router.navigate(['/order']);
  }
}
