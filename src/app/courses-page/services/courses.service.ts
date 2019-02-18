import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { v4 as uuid } from 'uuid';

import { Course } from '../course';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private _courses: BehaviorSubject<Course[]> = new BehaviorSubject([]);
  private courses: Observable<Course[]> = this._courses.asObservable();

  constructor(private http: HttpClient) {
  }

  loadCourses(page, limit) {
    const url = `courses?_page=${page}&_limit=${limit}`;

    this.http.get(url).subscribe((courses: any) => {
      this._courses.next(
        this._courses.getValue().concat(courses.map((course) => ({
          ...course,
          creationDate: new Date(course.creationDate)
        })))
      );
    });
  }

  getCourses(): Observable<Course[]> {
    return this.courses;
  }

  getCourseById(id: string): Observable<Object> {
    const url = `courses?id=${id}`;

    return this.http.get(url);
  }

  clearCourses() {
    this._courses.next([]);
  }

  searchCourses(query: string, page, limit) {
    const url = `courses?_page=${page}&_limit=${limit}&q=${query}`;

    this.http.get(url).subscribe((courses: any) => {
      this._courses.next(
        this._courses.getValue().concat(courses.map((course) => ({
          ...course,
          creationDate: new Date(course.creationDate)
        })))
      );
    });
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

  deleteCourse(id: string): Observable<Object> {
    const url = `courses/${id}`;

    return this.http.delete(url);
  }
}
