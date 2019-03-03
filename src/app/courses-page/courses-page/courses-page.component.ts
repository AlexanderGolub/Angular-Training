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
  private currentPage: number = 1;
  private lastPage: number = 2; // should be returned by serve but will suffice for now
  private pageLimit: number = 4;
  private lastSearchQuery: string = '';

  constructor(private search: SearchPipe, private coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesService.getCourses().subscribe((courses) => {
      this.courses = courses;
    });

    this.coursesService.loadCourses(this.currentPage, this.pageLimit);
  }

  loadCourses() {
    if (this.currentPage < this.lastPage) {
      this.currentPage = this.currentPage + 1;

      this.coursesService.loadCourses(this.currentPage, this.pageLimit);
    }
  }

  searchCourses(searchQuery : string) {
    this.currentPage = 1;               // reset pagination
    this.coursesService.clearCourses(); // clear courses list

    this.lastSearchQuery = searchQuery;
    this.coursesService.searchCourses(searchQuery, this.currentPage, this.pageLimit);
  }

  deleteCourse(courseId : string) {
    if (window.confirm('Delete this course?')) {
      this.currentPage = 1;
      this.coursesService.clearCourses();

      this.coursesService.deleteCourse(courseId).subscribe(() => {
        if (this.lastSearchQuery) {
          this.coursesService.searchCourses(this.lastSearchQuery, this.currentPage, this.pageLimit);
        } else {
          this.coursesService.loadCourses(this.currentPage, this.pageLimit);
        }
      });
    }
  }
}
