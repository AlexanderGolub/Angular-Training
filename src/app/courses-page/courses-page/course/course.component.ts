import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../course';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent {
  @Input() course: Course;
  @Output() delete = new EventEmitter<string>();

  constructor(private router: Router) {
  }

  onEdit() {
    this.router.navigate(['/courses', this.course.id]);
  }

  onDelete() {
    this.delete.emit(this.course.id);
  }
}
