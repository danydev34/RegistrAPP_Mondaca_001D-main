import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogalumnoPageRoutingModule } from './logalumno-routing.module';

import { LogalumnoPage } from './logalumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogalumnoPageRoutingModule
  ],
  declarations: [LogalumnoPage]
})
export class LogalumnoPageModule {}
