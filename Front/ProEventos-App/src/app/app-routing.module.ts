import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatosComponent } from './components/contatos/contatos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { PalestrantesComponent } from './components/palestrantes/palestrantes.component';
import { PerfilComponent } from './components/perfil/perfil.component';

const routes: Routes = [
  { path: 'eventos', component: EventosComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'perfil', component: PerfilComponent},
  { path: 'contatos', component: ContatosComponent},
  { path: 'palestrantes', component: PalestrantesComponent},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'}, //Quando não dizer o caminho irá redirecionar para dashboard
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full'} //Quando digitar qualquer coisa fora das rotas irá redirecionar para dashboard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
