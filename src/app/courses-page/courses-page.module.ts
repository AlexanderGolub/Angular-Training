import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { CourseComponent } from './courses-page/course/course.component';
import { NavigationComponent } from './courses-page/navigation/navigation.component';
import { SearchComponent } from './courses-page/navigation/search/search.component';
import { NewCourseComponent } from './courses-page/navigation/new-course/new-course.component';

@NgModule({
  declarations: [CoursesPageComponent, CourseComponent, NavigationComponent, SearchComponent, NewCourseComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CoursesPageComponent
  ]
})
export class CoursesPageModule { }
