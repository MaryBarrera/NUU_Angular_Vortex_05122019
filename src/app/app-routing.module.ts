import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { CreateComponent } from './pages/empleados/create/create.component';
import { ReadOneComponent } from './pages/empleados/read-one/read-one.component';


const routes: Routes = [
  { path: 'empleados', component: EmpleadosComponent },
  { path: 'empleados/create', component: CreateComponent },
  { path: 'empleados/:id', component: ReadOneComponent },
  { path: '', redirectTo: '/empleados', pathMatch: 'full' },
  { path: '**', component: EmpleadosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
