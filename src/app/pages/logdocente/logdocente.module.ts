import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogdocentePageRoutingModule } from './logdocente-routing.module';

import { LogdocentePage } from './logdocente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogdocentePageRoutingModule
  ],
  declarations: [LogdocentePage]
})
export class LogdocentePageModule {}
