miApp — Aplicación Móvil con Ionic y Angular

Aplicación móvil híbrida desarrollada con Ionic Framework y Angular (Standalone) como parte de la evaluación de la asignatura Ingeniería del Software en la UNETI.


📱 Páginas de la Aplicación

🏠 Inicio

Formulario de registro del estudiante con cuatro campos: nombre, carrera, correo y teléfono. Una vez registrado, muestra una tarjeta de bienvenida con los datos ingresados. Usa un servicio compartido (EstudianteService) para persistir los datos entre páginas.

👤 Información Personal

Muestra los datos del estudiante registrado en una tarjeta visual con avatar e íconos identificativos. Lee la información directamente del EstudianteService sin lógica propia.

✉️ Contacto

Formulario con tres campos (nombre, correo y mensaje) con validación de campos vacíos. Los mensajes enviados se muestran en tarjetas con avatar de inicial. Incluye función para eliminar mensajes individuales de la lista.


⚙️ Tecnologías Utilizadas

TecnologíaUsoIonic FrameworkComponentes UI y estructura móvilAngular (Standalone)Lógica de componentes y directivasTypeScriptTipado estático y lógica de negocioNode.js / npmEntorno de ejecución y paquetes


🚀 Instalación y Ejecución

bash# Clonar el repositorio
git clone https://github.com/ElCondeV/miApp.git
cd miApp

# Instalar dependencias
npm install

# Ejecutar en el navegador
ionic serve


🧠 Conceptos Aplicados


Componentes Standalone — cada componente importa sus propias dependencias sin NgModules
Two-Way Data Binding — [(ngModel)] sincroniza campos del formulario con variables del componente
Inyección de Dependencias — EstudianteService con providedIn: 'root' comparte datos entre páginas
Directivas *ngIf y *ngFor — control condicional y renderizado de listas dinámicas
Manipulación de arreglos — splice(i, 1) para eliminar mensajes por índice
Lazy Loading — loadComponent carga cada página solo cuando se navega hacia ella



📁 Estructura del Proyecto

src/
└── app/
    ├── pages/
    │   ├── inicio/         → Registro y bienvenida
    │   ├── informacion/    → Perfil del estudiante
    │   └── contacto/       → Formulario y lista de mensajes
    ├── services/
    │   └── estudiante.ts   → Servicio compartido de datos
    ├── app.component.html  → Menú lateral
    ├── app.component.ts    → Lógica del menú
    └── app.routes.ts       → Rutas de navegación


✏️ Autor

Vladimir Alejandro Rodríguez Hernández

C.I.: 29.915.065

UNETI — Programa Nacional de Formación en Informática

Docente: Carlos Márquez
