import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes : Componente[] = [
    {
      name: 'Bienvenida',
      redirecTo: '/bienvenida',//ver app-routing
      icon: 'happy-outline',
    },
    {
      name:'Inicio',
      redirecTo: '/inicio',
      icon: 'home-outline'
    }, 
    {
        name: 'Formulario',
        redirecTo: '/formulario',
        icon: 'key-outline'
    },
  ]





}
