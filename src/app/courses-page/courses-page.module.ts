import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { CourseComponent } from './courses-page/course/course.component';
import { SearchComponent } from './courses-page/search/search.component';
import { NewCourseComponent } from './courses-page/new-course/new-course.component';
import { CourseBorderDirective } from './directives/course-border.directive';
import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    CoursesPageComponent,
    CourseComponent,
    SearchComponent,
    NewCourseComponent,
    CourseBorderDirective,
    DurationPipe,
    OrderByPipe,
    SearchPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CoursesPageComponent
  ]
})
export class CoursesPageModule { }
