import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesPageComponent } from './courses-page.component';
import { Course } from '../course';

const defaultCourses : Course[] = [
  {
    id: 'Course1',
    title: 'Video Course 1',
    creationDate : new Date('2018-05-29'),
    duration: 88,
    description: 'desc 1'
  },
  {
    id: 'Course2',
    title: 'Video Course 2',
    creationDate: new Date('2018-06-10'),
    duration: 27,
    description: 'desc 2'
  }
];

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesPageComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders courses', () => {
    component.courses = defaultCourses;
    fixture.detectChanges();
    const coursesList : HTMLCollection = fixture.nativeElement.querySelectorAll('app-course');

    expect(coursesList.length).toBe(defaultCourses.length);
  });

  it('removes courses', () => {
    component.courses = [...defaultCourses];
    component.deleteCourse(defaultCourses[0].id);
    fixture.detectChanges();
    const coursesList : HTMLCollection = fixture.nativeElement.querySelectorAll('app-course');

    expect(component.courses.length).toBe(defaultCourses.length - 1);
    expect(coursesList.length).toBe(component.courses.length);
  });
});
