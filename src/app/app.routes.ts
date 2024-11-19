import { Routes } from '@angular/router';
import { IngresarValoresComponent } from './componentes/ingresar-valores/ingresar-valores.component';
import { MostrarRegistrosComponent } from './componentes/mostrar-registros/mostrar-registros.component';

export const routes: Routes = [
  { path: '', redirectTo: '/ingresar-valores', pathMatch: 'full' },
  { path: 'ingresar-valores', component: IngresarValoresComponent },
  { path: 'mostrar-registros', component: MostrarRegistrosComponent }
];