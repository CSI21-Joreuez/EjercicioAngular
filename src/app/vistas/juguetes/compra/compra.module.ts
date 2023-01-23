import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompraRoutingModule } from './compra-routing.module';
import { CompraComponent } from './compra.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { UtilidadesModule } from '../../../utilidades/utilidades.module';
import { DetallesComponent } from './detalles/detalles.component';


@NgModule({
  declarations: [
    CompraComponent,
    DetallesComponent
  ],
  imports: [
    CommonModule,
    CompraRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    UtilidadesModule
  ]
})
export class CompraModule { }
