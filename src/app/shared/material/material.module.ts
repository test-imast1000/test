import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';

import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
     MatSelectModule, 
     MatButtonModule,
     MatTabsModule,
     MatIconModule,
     MatExpansionModule
  ],
  exports:[
    MatInputModule,
    MatSelectModule, 
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatExpansionModule
  ]
})
export class MaterialModule { }
