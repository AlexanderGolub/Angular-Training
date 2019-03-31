import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CoursesService } from '../services/courses.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-course-page',
  templateUrl: './edit-course-page.component.html',
  styleUrls: ['./edit-course-page.component.css']
})
export class EditCoursePageComponent implements OnInit {
  courseForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(500)]),
    duration: new FormControl('', [Validators.required]),
  });
  courseId: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) {
  }

  get title() { return this.courseForm.get('title'); }
  get description() { return this.courseForm.get('description'); }
  get duration() { return this.courseForm.get('duration'); }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.coursesService.getCourseById(params.id).subscribe((courses: any) => {
        const course = courses[0];

        this.courseId = course.id;

        this.courseForm.setValue({
          title: course.title,
          description: course.description,
          duration: course.duration.toString(),
        });
      });
    });
  }

  onSave() {
    // this.coursesService.updateCourse({
    //   id: this.courseId,
    //   title: this.title,
    //   description: this.description,
    //   duration: this.duration
    // }).subscribe(() => {
    //   this.router.navigate(['courses']);
    // });
  }

  onCancel() {
    this.router.navigate(['courses']);
  }
}
