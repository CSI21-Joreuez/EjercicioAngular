import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './vistas/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path:'juguetes', loadChildren: () => import('./vistas/juguetes/compra/compra.module').
then(m =>m.CompraModule)},
  {path: '**', redirectTo:'', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
