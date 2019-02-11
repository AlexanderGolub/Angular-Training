import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesPageComponent } from './courses-page/courses-page/courses-page.component';
import { LoginPageComponent } from './login-page/login-page/login-page.component';
import { NewCoursePageComponent } from './courses-page/new-course-page/new-course-page.component';
import { AuthGuard } from './core/guards/auth.guard';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'courses/new',
    component: NewCoursePageComponent,
    data: { title: 'New Course' },
    canActivate: [
      AuthGuard
    ]
  },
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
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
