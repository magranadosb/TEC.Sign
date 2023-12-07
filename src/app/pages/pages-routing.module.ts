import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        data: {
          itemName: 'Dashboard'
        }
      },
      {
        path: 'documento',
        loadChildren: () => import('./documento/documento.module').then(m => m.DocumentoModule),
        data: {
          itemName: 'Documento'
        }
      },
      {
        path: 'usuario',
        loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule),
        data: {
          itemName: 'Usuario'
        }
      },
      {
        path: 'envelope',
        loadChildren: () => import('./envelope/envelope.module').then(m => m.EnvelopeModule),
        data: {
          itemName: 'Envelope'
        }
      },
      {
        path: '**',
        redirectTo: '/page-not-found'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
