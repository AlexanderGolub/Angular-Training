import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-new-course-page',
  templateUrl: './new-course-page.component.html',
  styleUrls: ['./new-course-page.component.css']
})
export class NewCoursePageComponent {
  title: string = '';
  description: string = '';
  duration: string = '';

  constructor(private router: Router, private coursesService: CoursesService) {
  }

  onSave() {
    this.coursesService.createCourse({
      title: this.title,
      description: this.description,
      duration: this.duration
    }).subscribe(() => {
      this.router.navigate(['courses']);
    });
  }

  onCancel() {
    this.router.navigate(['courses']);
  }
}
