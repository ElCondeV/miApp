// Componente de la página Contacto.
// Maneja el formulario y guarda los mensajes enviados para mostrarlos en pantalla.

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons,
         IonMenuButton, IonItem, IonLabel, IonInput, IonIcon,
         IonTextarea, IonButton, IonCard, IonCardHeader,
         IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: true,
  // CommonModule es necesario para usar *ngIf y *ngFor en el HTML
  // FormsModule permite el two-way binding con [(ngModel)]
  imports: [CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle,
            IonContent, IonButtons, IonMenuButton, IonItem, IonLabel,
            IonInput, IonIcon, IonTextarea, IonButton, IonCard,
            IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent],
})
export class ContactoPage {

  // Variables conectadas a los campos del formulario
  nombre: string = '';
  correo: string = '';
  mensaje: string = '';

  // Arreglo que almacena todos los mensajes enviados para mostrarlos en pantalla
  mensajesEnviados: { nombre: string, correo: string, mensaje: string }[] = [];

  // Método que se ejecuta al presionar Enviar.
  // Valida que los campos no estén vacíos, guarda el mensaje en el arreglo
  // y limpia el formulario para un nuevo mensaje.
  enviar() {

    // Validación: verifica que todos los campos tengan contenido
    if (!this.nombre || !this.correo || !this.mensaje) {
      alert('Por favor completa todos los campos.');
      return;
    }

    // Agrega el mensaje al arreglo de mensajes enviados
    this.mensajesEnviados.push({
      nombre: this.nombre,
      correo: this.correo,
      mensaje: this.mensaje
    });

    // Limpia los campos del formulario después de enviar
    this.nombre = '';
    this.correo = '';
    this.mensaje = '';
  }
}