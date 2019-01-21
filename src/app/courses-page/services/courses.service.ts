import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Course } from '../course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private _courses: Course[];

  constructor() {
    const description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim provident minima quos itaque tempora molestias
    blanditiis quod. Molestias dolores ipsa aut velit voluptatum possimus tempore perferendis natus, non pariatur.`;
    this._courses = [
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
  }

  getCourses(): Course[] {
    return this._courses;
  }

  getCourseById(id : string): Course {
    return this._courses.find((course : Course) => course.id === id);
  }

  createCourse(newCourse): void {
    this._courses.push({
      id: uuid(),
      title: newCourse.title,
      creationDate: new Date(),
      duration: newCourse.duration,
      description: newCourse.description,
      topRated: false,
    });
  }

  updateCourse(courseInfo: any): boolean {
    return this._courses.some((course) => {
      if (course.id === courseInfo.id) {
        course.title = courseInfo.title;
        course.duration = courseInfo.duration;
        course.description = courseInfo.description;

        return true;
      }
    });
  }

  deleteCourse(id: string): void {
    const index = this._courses.findIndex((course : Course) => course.id === id);

    if (index !== -1) {
      this._courses.splice(index, 1);
    }
  }
}
