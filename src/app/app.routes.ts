import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { PrivateComponent } from './private/private.component';
import { PublicComponent } from './public/public.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'public',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'public',
    component: PublicComponent,
  },
  {
    path: 'private',
    component: PrivateComponent,
    canActivate: [authGuard],
  },
];
