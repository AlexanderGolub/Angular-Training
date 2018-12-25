import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { SearchPipe } from '../pipes/search.pipe';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css'],
  providers: [ SearchPipe ]
})
export class CoursesPageComponent implements OnInit {
  courses : Course[] = [];
  coursesToShow : Course[] = [];

  constructor(private search: SearchPipe) { }

  ngOnInit() {
    const description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim provident minima quos itaque tempora molestias
    blanditiis quod. Molestias dolores ipsa aut velit voluptatum possimus tempore perferendis natus, non pariatur.`;
    this.courses = [
      {
        id: 'Course1',
        title: 'Video Course 1',
        creationDate : new Date('2019-05-29'),
        duration: 88,
        description,
        topRated: false,
      },
      {
        id: 'Course2',
        title: 'Video Course 2',
        creationDate: new Date('2018-12-14'),
        duration: 27,
        description,
        topRated: true,
      },
      {
        id: 'Course3',
        title: 'Video Course 3',
        creationDate: new Date('2019-07-16'),
        duration: 46,
        description,
        topRated: true,
      },
      {
        id: 'Course4',
        title: 'Video Course 4',
        creationDate : new Date('2018-05-29'),
        duration: 88,
        description,
        topRated: false,
      },
      {
        id: 'Course5',
        title: 'Video Course 5',
        creationDate: new Date('2018-06-10'),
        duration: 27,
        description,
        topRated: false,
      },
      {
        id: 'Course6',
        title: 'Video Course 6',
        creationDate: new Date('2018-07-16'),
        duration: 46,
        description,
        topRated: true,
      }
    ];

    this.coursesToShow = this.courses;
  }

  loadCourses() {
    console.log('LOAD MORE');
  }

  searchCourses(searchQuery : string) {
    this.coursesToShow = this.search.transform(this.courses, 'title', searchQuery);
  }

  deleteCourse(courseId : string) {
    const index : number = this.courses.findIndex((course : Course) =>  course.id === courseId);

    this.courses.splice(index, 1);
  }
}
