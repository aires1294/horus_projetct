import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartilhasComponent } from './cartilhas.component';
import { RecursosAjudaComponent } from './recursos-ajuda.component';

const routes: Routes = [
  { path: '', component: CartilhasComponent},
  { path: 'materiais', component: CartilhasComponent },
  { path: 'ajuda', component: RecursosAjudaComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
