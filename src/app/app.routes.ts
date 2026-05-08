// Este archivo define todas las rutas de navegación de la aplicación.
// Cada ruta conecta una URL con su página correspondiente.

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    // Si el usuario no escribe ninguna ruta, lo manda automáticamente a inicio
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    // Ruta de la página principal
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then(m => m.InicioPage)
  },
  {
    // Ruta de la página con datos personales del estudiante
    path: 'informacion',
    loadComponent: () => import('./pages/informacion/informacion.page').then(m => m.InformacionPage)
  },
  {
    // Ruta de la página de contacto con su formulario
    path: 'contacto',
    loadComponent: () => import('./pages/contacto/contacto.page').then(m => m.ContactoPage)
  }
];