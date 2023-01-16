import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompraRoutingModule } from './compra-routing.module';
import { CompraComponent } from './compra.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CompraComponent
  ],
  imports: [
    CommonModule,
    CompraRoutingModule,
    ReactiveFormsModule
  ]
})
export class CompraModule { }
