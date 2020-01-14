import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosComponent } from './empleados/empleados.component';
import { ReadOneComponent } from './empleados/read-one/read-one.component';
import { CreateComponent } from './empleados/create/create.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BuscaEmpleadoPipe } from '../pipes/busca-empleado.pipe';



@NgModule({
  declarations: [
    EmpleadosComponent,
    ReadOneComponent,
    CreateComponent,
    BuscaEmpleadoPipe],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    EmpleadosComponent
  ]
})
export class PagesModule { }
