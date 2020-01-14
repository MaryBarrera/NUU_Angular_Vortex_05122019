import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-read-one',
  templateUrl: './read-one.component.html',
  styleUrls: ['./read-one.component.css']
})
export class ReadOneComponent implements OnInit {

  empleado: Empleado;

  constructor(
    private route: ActivatedRoute,
    private empleadosService: EmpleadosService) {}

  ngOnInit() {
    this.route.params
    .subscribe(
      (res) => {
        this.empleadosService.readOne(res.id)
        .subscribe(
          (data) => {
            this.empleado = data;
          },
          (err) => {
            console.error(err);
          }
        );
      },
      (err) => {
        console.error(err);
      }
    );
  }

}
