import { Component, OnInit } from '@angular/core';
import { MenuController  } from '@ionic/angular'; //Se debe inyectar en el constructor, a través de un objeto
import { Router } from '@angular/router';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  


  constructor(private menuController: MenuController,
              private router: Router) { }

  ngOnInit() {
  }

  MostrarMenu(){
    this.menuController.open('first');//Se abre el menu

  }

  Asignatura() {
    this.router.navigate(['/iAsignatura']); // Navega a la página 2
  }

  Alumno() {
    this.router.navigate(['/ialumno']); // Navega a la página 2
  }

}
