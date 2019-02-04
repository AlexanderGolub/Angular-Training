import { Component } from '@angular/core';

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

  onSave() {
    console.log('save', this.title, this.description, this.date, this.duration);
  }

  onCancel() {
    console.log('cancel');
  }
}
