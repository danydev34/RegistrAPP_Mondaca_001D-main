import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdocentePage } from './idocente.page';

const routes: Routes = [
  {
    path: '',
    component: IdocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdocentePageRoutingModule {}
