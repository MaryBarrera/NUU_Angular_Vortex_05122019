import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private empleadosServices: EmpleadosService,
    private router: Router) { }

  empleadoForm = this.formBuilder.group({
    nombre: ['', {validators: [Validators.required]}],
    apaterno: ['', {validators: [Validators.required]}],
    amaterno: ['', {validators: [Validators.required]}],
    puesto: ['', {validators: [Validators.required]}]
  });

  ngOnInit() { }

  submit() {

    if (!this.empleadoForm.valid) {
      alert('Alguna regla de validación no se está cumpliendo');
      return;
    }

    this.empleadosServices
    .create(this.empleadoForm.value)
    .subscribe(
      (data) => {
        console.log(data);
        this.router.navigateByUrl('empleados');
      },
      (err) => {
        console.log(err);
      }
    );
  }

  refrescar() {
    this.empleadoForm.patchValue({
      nombre: '',
      apaterno: '',
      amaterno: '',
      puesto: ''
    });
  }

}
