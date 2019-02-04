import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesPageComponent } from './courses-page/courses-page/courses-page.component';
import { LoginPageComponent } from './login-page/login-page/login-page.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'courses',
    component: CoursesPageComponent,
    data: { title: 'Courses List' },
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'login',
    component: LoginPageComponent,
    data: { title: 'Login' },
  },
  { path: '',
    redirectTo: '/courses',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
