import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogdocentePage } from './logdocente.page';

const routes: Routes = [
  {
    path: '',
    component: LogdocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogdocentePageRoutingModule {}
