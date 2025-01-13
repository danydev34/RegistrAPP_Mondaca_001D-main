import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-idocente',
  templateUrl: './idocente.page.html',
  styleUrls: ['./idocente.page.scss'],
})
export class IdocentePage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async Registrar() {
    const alert = await this.alertController.create({
      header: 'Registro exitoso!',
      subHeader: 'Bienvenid@ profe a la app',
      message: 'Ante cualquier incoveniente, avisenos',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
