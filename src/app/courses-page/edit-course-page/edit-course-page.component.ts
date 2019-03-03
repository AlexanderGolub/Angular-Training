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
  duration: string = '';
  courseId: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.coursesService.getCourseById(params.id).subscribe((courses: any) => {
        const course = courses[0];

        this.courseId = course.id;
        this.title = course.title;
        this.description = course.description;
        this.duration = course.duration.toString();
      });
    });
  }

  onSave() {
    this.coursesService.updateCourse({
      id: this.courseId,
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
