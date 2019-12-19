import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { EditCoursePageComponent } from './edit-course-page/edit-course-page.component';
import { DurationInputComponent } from './edit-course-page/duration-input/duration-input.component';
import { DurationValidatorDirective } from './edit-course-page/duration-input/duration-validator.directive';

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
    NewCoursePageComponent,
    EditCoursePageComponent,
    DurationInputComponent,
    DurationValidatorDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
