import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IalumnoPage } from './ialumno.page';

const routes: Routes = [
  {
    path: '',
    component: IalumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IalumnoPageRoutingModule {}
