import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() course: Course;
  @Output() delete = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onEdit() {
    console.log('Edit');
  }

  onDelete() {
    this.delete.emit(this.course.id);
  }
}
