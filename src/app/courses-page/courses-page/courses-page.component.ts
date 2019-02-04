import { Component, OnInit } from '@angular/core';

import { Course } from '../course';
import { SearchPipe } from '../pipes/search.pipe';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css'],
  providers: [ SearchPipe ]
})
export class CoursesPageComponent implements OnInit {
  courses : Course[] = [];

  constructor(private search: SearchPipe, private coursesService: CoursesService) { }

  ngOnInit() {
    this.courses = this.coursesService.getCourses();
  }

  loadCourses() {
    console.log('LOAD MORE');
  }

  searchCourses(searchQuery : string) {
    this.courses = this.search.transform(
      this.coursesService.getCourses(),
      'title',
      searchQuery
    );
  }

  deleteCourse(courseId : string) {
    if (window.confirm('Delete this course?')) {
      this.coursesService.deleteCourse(courseId);
    }
  }
}
