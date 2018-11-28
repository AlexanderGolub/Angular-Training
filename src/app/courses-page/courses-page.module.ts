import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { CourseComponent } from './courses-page/course/course.component';

@NgModule({
  declarations: [CoursesPageComponent, CourseComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CourseComponent
  ]
})
export class CoursesPageModule { }
