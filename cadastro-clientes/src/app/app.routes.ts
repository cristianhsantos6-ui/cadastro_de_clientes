import { Routes } from '@angular/router';
import { Formulario } from './component/formulario/formulario';
import { ListaComponent } from './component/lista/lista';

export const routes: Routes = [
  { path: '', redirectTo: 'formulario', pathMatch: 'full' },
  { path: 'formulario', component: Formulario },
  { path: 'lista', component: ListaComponent }
];

