// Componente principal de la app. Controla el menú lateral.

import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar,
         IonTitle, IonContent, IonList, IonItem, IonIcon,
         IonLabel, MenuController } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EstudianteService } from './services/estudiante';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [CommonModule, IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar,
            IonTitle, IonContent, IonList, IonItem, IonIcon, IonLabel, RouterLink],
})
export class AppComponent {

  // Inyectamos MenuController y EstudianteService como públicos
  // para poder usarlos directamente en el HTML del menú
  constructor(
    private menu: MenuController,
    public estudianteService: EstudianteService
  ) {}

  // Cierra el menú cuando el usuario selecciona una opción
  cerrarMenu() {
    this.menu.close();
  }
}