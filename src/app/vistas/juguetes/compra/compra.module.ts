import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompraRoutingModule } from './compra-routing.module';
import { CompraComponent } from './compra.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    CompraComponent
  ],
  imports: [
    CommonModule,
    CompraRoutingModule,
    ReactiveFormsModule,
    MatTableModule
  ]
})
export class CompraModule { }
