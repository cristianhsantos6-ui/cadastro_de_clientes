import { Routes } from '@angular/router';
import { Formulario } from './component/formulario/formulario';
import { ListaComponent } from './component/lista/lista';

export const routes: Routes = [
  { path: '', redirectTo: 'lista', pathMatch: 'full' },
  { path: 'lista', component: ListaComponent },
  { path: 'formulario', component: Formulario }
];

