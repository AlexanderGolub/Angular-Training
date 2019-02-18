import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-course-page',
  templateUrl: './new-course-page.component.html',
  styleUrls: ['./new-course-page.component.css']
})
export class NewCoursePageComponent {
  title: string = '';
  description: string = '';
  date: string = '';
  duration: string = '';

  constructor(private router: Router) {
  }

  onSave() {
    console.log('save', this.title, this.description, this.date, this.duration);
    this.router.navigate(['courses']);
  }

  onCancel() {
    this.router.navigate(['courses']);
  }
}
