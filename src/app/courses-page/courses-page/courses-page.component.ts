import { Component, OnInit } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {
  courses : Course[] = [];

  constructor() { }

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
        id: 'Course1',
        title: 'Video Course 1',
        creationDate : new Date('2018-05-29'),
        duration: 88,
        description,
        topRated: false,
      },
      {
        id: 'Course2',
        title: 'Video Course 2',
        creationDate: new Date('2018-06-10'),
        duration: 27,
        description,
        topRated: false,
      },
      {
        id: 'Course3',
        title: 'Video Course 3',
        creationDate: new Date('2018-07-16'),
        duration: 46,
        description,
        topRated: true,
      }
    ];
  }

  loadCourses() {
    console.log('LOAD MORE');
  }

  deleteCourse(courseId : string) {
    const index : number = this.courses.findIndex((course : Course) =>  course.id === courseId);

    this.courses.splice(index, 1);
  }
}
