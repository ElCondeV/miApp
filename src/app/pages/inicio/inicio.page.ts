// Componente de la página Inicio.
// Muestra el formulario de registro si el estudiante no se ha registrado,
// o sus datos personales si ya completó el registro.

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons,
         IonMenuButton, IonCard, IonCardContent, IonCardHeader,
         IonCardTitle, IonCardSubtitle, IonItem, IonLabel,
         IonInput, IonButton, IonIcon } from '@ionic/angular/standalone';
import { EstudianteService } from '../../services/estudiante';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  // CommonModule permite usar *ngIf en el HTML
  // FormsModule permite usar [(ngModel)] en los campos del formulario
  // EstudianteService se inyecta para compartir datos entre páginas
  imports: [CommonModule, FormsModule, RouterLink,
            IonHeader, IonToolbar, IonTitle, IonContent, IonButtons,
            IonMenuButton, IonCard, IonCardContent, IonCardHeader,
            IonCardTitle, IonCardSubtitle, IonItem, IonLabel,
            IonInput, IonButton, IonIcon],
})
export class InicioPage {

  // Variables conectadas al formulario de registro
  nombre:   string = '';
  carrera:  string = '';
  correo:   string = '';
  telefono: string = '';

  // Inyectamos el servicio como público para poder usarlo directamente en el HTML
  constructor(public estudianteService: EstudianteService) {}

  // Método que guarda los datos del estudiante en el servicio compartido.
  // Valida que todos los campos estén completos antes de guardar.
  registrar() {
    if (!this.nombre || !this.carrera || !this.correo || !this.telefono) {
      alert('Por favor completa todos los campos.');
      return;
    }

    // Guarda los datos en el servicio para que otras páginas los puedan leer
    this.estudianteService.guardar(
      this.nombre,
      this.carrera,
      this.correo,
      this.telefono
    );
  }
}