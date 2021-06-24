import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
const MaterialComponents = [
  MatButtonModule,  
  MatProgressSpinnerModule
];


@NgModule({
  declarations: [],
  imports: [MaterialComponents], 
  exports : [MaterialComponents]
})
export class MaterialModule { }
