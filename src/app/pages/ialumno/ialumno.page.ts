import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ialumno',
  templateUrl: './ialumno.page.html',
  styleUrls: ['./ialumno.page.scss'],
})
export class IalumnoPage implements OnInit {

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
