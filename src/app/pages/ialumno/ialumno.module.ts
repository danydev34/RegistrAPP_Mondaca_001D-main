import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IalumnoPageRoutingModule } from './ialumno-routing.module';

import { IalumnoPage } from './ialumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IalumnoPageRoutingModule
  ],
  declarations: [IalumnoPage]
})
export class IalumnoPageModule {}
