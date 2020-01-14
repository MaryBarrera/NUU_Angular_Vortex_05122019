import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(
    private httpClient: HttpClient
  ) { }

  create(empleado: Empleado) {
    return this.httpClient
      .post<Empleado>('http://localhost:8080/employee/add', empleado);
  }

  readAll() {
    return this.httpClient
      .get<Empleado[]>('http://localhost:8080/employee/all');
  }

  readOne(id: number) {
    return this.httpClient
      .get<Empleado>('http://localhost:8080/employee/' + id);
  }

  delOne(id: number) {
    return this.httpClient
      .delete<any>('http://localhost:8080/employee/' + id);
  }
}
