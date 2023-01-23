import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompraComponent } from './compra.component';
import { DetallesComponent } from './detalles/detalles.component';

const routes: Routes = [
  {path: '', component:CompraComponent},
  {path: 'detalles/:id', component: DetallesComponent},
  { path: '**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompraRoutingModule { }
