import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio';
import { ContactoComponent } from './contacto/contacto';
import { ProductosComponent } from './productos/productos';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'productos', component: ProductosComponent },
];
