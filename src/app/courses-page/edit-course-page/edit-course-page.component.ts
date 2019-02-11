import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-edit-course-page',
  templateUrl: './edit-course-page.component.html',
  styleUrls: ['./edit-course-page.component.css']
})
export class EditCoursePageComponent implements OnInit {
  title: string = '';
  description: string = '';
  date: string = '';
  duration: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const course = this.coursesService.getCourseById(params.id);

      this.title = course.title;
      this.description = course.description;
      this.date = course.creationDate.toISOString();
      this.duration = course.duration.toString();
    });
  }

  onSave() {
    console.log('save', this.title, this.description, this.date, this.duration);
    this.router.navigate(['courses']);
  }

  onCancel() {
    this.router.navigate(['courses']);
  }
}
