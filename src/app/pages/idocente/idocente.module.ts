import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdocentePageRoutingModule } from './idocente-routing.module';

import { IdocentePage } from './idocente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdocentePageRoutingModule
  ],
  declarations: [IdocentePage]
})
export class IdocentePageModule {}
