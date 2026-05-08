// Servicio compartido que almacena los datos del estudiante.
// Al ser un servicio inyectable, cualquier página puede leer o modificar estos datos.

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  datos = {
    nombre: '',
    carrera: '',
    correo: '',
    telefono: ''
  };

  guardar(nombre: string, carrera: string, correo: string, telefono: string) {
    this.datos.nombre   = nombre;
    this.datos.carrera  = carrera;
    this.datos.correo   = correo;
    this.datos.telefono = telefono;
  }

  estaRegistrado(): boolean {
    return this.datos.nombre.trim() !== '';
  }
}