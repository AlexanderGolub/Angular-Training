import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { NewCoursePageComponent } from './new-course-page/new-course-page.component';
import { CourseComponent } from './courses-page/course/course.component';
import { SearchComponent } from './courses-page/search/search.component';
import { NewCourseComponent } from './courses-page/new-course/new-course.component';
import { CourseBorderDirective } from './directives/course-border.directive';
import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { CoursesService } from './services/courses.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CoursesPageComponent,
    CourseComponent,
    SearchComponent,
    NewCourseComponent,
    CourseBorderDirective,
    DurationPipe,
    OrderByPipe,
    SearchPipe,
    NewCoursePageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CoursesPageComponent
  ],
  providers: [
    CoursesService
  ]
})
export class CoursesPageModule { }
