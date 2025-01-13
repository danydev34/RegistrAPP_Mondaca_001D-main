import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IonDatetime } from '@ionic/angular/standalone';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.page.html',
  styleUrls: ['./asignatura.page.scss'],
})
export class AsignaturaPage implements OnInit {

 
   constructor(private alertController: AlertController) { }
 
   ngOnInit() {
   }
 
   async Registrar() {
     const alert = await this.alertController.create({
       header: 'Registro exitoso!',
       subHeader: 'Bienvenid@ a la app',
       message: 'Ante cualquier incoveniente, avisanos',
       buttons: ['OK'],
     });
 
     await alert.present();
   }
    
}

