import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { v4 as uuid } from 'uuid';

import { Course } from '../course';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoaderService } from 'src/app/core/services/loader.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private _courses: BehaviorSubject<Course[]> = new BehaviorSubject([]);
  private courses: Observable<Course[]> = this._courses.asObservable();

  constructor(private http: HttpClient, private loader: LoaderService) {
  }

  loadCourses(page, limit) {
    const url = `courses?_page=${page}&_limit=${limit}`;
    this.loader.showLoader();

    this.http.get(url).subscribe((courses: any) => {
      this._courses.next(
        this._courses.getValue().concat(courses.map((course) => ({
          ...course,
          creationDate: new Date(course.creationDate)
        })))
      );

      this.loader.hideLoader();
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
    this.loader.showLoader();

    this.http.get(url).subscribe((courses: any) => {
      this._courses.next(
        this._courses.getValue().concat(courses.map((course) => ({
          ...course,
          creationDate: new Date(course.creationDate)
        })))
      );

      this.loader.hideLoader();
    });
  }

  createCourse(newCourse): Observable<Object> {
    const url = `courses/`;
    this.clearCourses();

    return this.http.post(url, {
      id: uuid(),
      title: newCourse.title,
      creationDate: new Date(),
      duration: newCourse.duration,
      description: newCourse.description,
      topRated: false,
    });
  }

  updateCourse(courseInfo: any): Observable<Object> {
    const url = `courses/${courseInfo.id}`;
    this.clearCourses();

    return this.http.put(url, {
      title: courseInfo.title,
      duration: courseInfo.duration,
      description: courseInfo.description,
    });
  }

  deleteCourse(id: string): Observable<Object> {
    const url = `courses/${id}`;

    return this.http.delete(url);
  }
}
