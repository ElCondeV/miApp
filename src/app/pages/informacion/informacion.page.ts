// Componente de la página Información Personal.
// Lee los datos del estudiante desde el servicio compartido EstudianteService.

import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons,
         IonMenuButton, IonCard, IonCardContent,
         IonIcon } from '@ionic/angular/standalone';
import { EstudianteService } from '../../services/estudiante';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons,
            IonMenuButton, IonCard, IonCardContent, IonIcon],
})
export class InformacionPage {

  // Inyectamos el servicio como público para usarlo directamente en el HTML
  constructor(public estudianteService: EstudianteService) {}
}