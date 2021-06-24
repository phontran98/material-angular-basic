import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button'
import { MatBadgeModule } from '@angular/material/badge'
const MaterialComponents = [
  MatButtonModule,
  MatBadgeModule
];


@NgModule({
  declarations: [],
  imports: [MaterialComponents], 
  exports : [MaterialComponents]
})
export class MaterialModule { }
