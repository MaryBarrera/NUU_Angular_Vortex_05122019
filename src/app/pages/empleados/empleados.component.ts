import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  empleados: Empleado[] = [];

  constructor(
    private empleadoService: EmpleadosService,
    public router: Router) {
    this.loadData();
  }

  ngOnInit() {
  }

  deleteEmpleado(id: number) {
    const opcion = confirm('Esta seguro?');
    if (opcion === true) {
      this.empleadoService.delOne(id)
        .subscribe(
          (res) => {
            console.log(res);
            this.loadData();
          },
          (err) => {
            console.error(err);
          }
        );
    }
  }

  loadData() {
    this.empleadoService.readAll()
      .subscribe(
        (res) => {
          console.log(res);
          this.empleados = res;
        },
        (err) => {
          console.error(err);
        }
      );
  }

}
