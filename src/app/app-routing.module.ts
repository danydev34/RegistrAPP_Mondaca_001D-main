import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'formulario',
    loadChildren: () => import('./pages/formulario/formulario.module').then( m => m.FormularioPageModule)
  },
  {
    path: 'idocente',
    loadChildren: () => import('./pages/idocente/idocente.module').then( m => m.IdocentePageModule)
  },
  {
    path: 'ialumno',
    loadChildren: () => import('./pages/ialumno/ialumno.module').then( m => m.IalumnoPageModule)
  },
  {
    path: 'logdocente',
    loadChildren: () => import('./pages/logdocente/logdocente.module').then( m => m.LogdocentePageModule)
  },
  {
    path: 'logalumno',
    loadChildren: () => import('./pages/logalumno/logalumno.module').then( m => m.LogalumnoPageModule)
  },
  {
    path: 'bienvenida',
    loadChildren: () => import('./pages/bienvenida/bienvenida.module').then( m => m.BienvenidaPageModule)
  },
  {
    path: 'pinicio',
    loadChildren: () => import('./pages/pinicio/pinicio.module').then( m => m.PinicioPageModule)
  },  {
    path: 'asignatura',
    loadChildren: () => import('./asignatura/asignatura.module').then( m => m.AsignaturaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
