import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import {AuthGuard} from './guards/auth.guard';
import { NologinGuard } from './guards/nologin.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule), canActivate : [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./componentes/login/login.module').then( m => m.LoginPageModule), canActivate : [NologinGuard]
  },
  {
    path: 'modificarperfil',
    loadChildren: () => import('./tab3/modificarperfil/modificarperfil.module').then( m => m.ModificarperfilPageModule)
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./pages/todo-details/todo-details.module').then( m => m.TodoDetailsPageModule)
  },
  {
    path: 'details', loadChildren: () => import('./pages/todo-details/todo-details.module').then( m => m.TodoDetailsPageModule)
  },
  {
    path: 'detalle/:id',
    loadChildren: () => import('./pages/servicio-detalle/servicio-detalle.module').then( m => m.ServicioDetallePageModule)
  },
  {
    path: 'detalle', loadChildren: () => import('./pages/servicio-detalle/servicio-detalle.module').then( m => m.ServicioDetallePageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
