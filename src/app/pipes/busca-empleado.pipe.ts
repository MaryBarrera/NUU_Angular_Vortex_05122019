import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscaEmpleado'
})
export class BuscaEmpleadoPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === undefined || arg === '' || arg.length < 3 ) { return value; }
    const resultEmpleados = [];
    for (const empleado of value) {
      if (empleado.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultEmpleados.push(empleado);
      }
    }
    return resultEmpleados;
  }

}
