import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NumerosComponent } from './components/numeros/numeros.component';
import { PerrosComponent } from './components/perros/perros.component';

const routes: Routes = [
  {path: 'numeros', component: NumerosComponent},
  {path: 'perros', component: PerrosComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'perros'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
