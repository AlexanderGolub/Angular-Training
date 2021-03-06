import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import { Course } from '../../course';
import { CourseBorderDirective } from '../../directives/course-border.directive';
import { DurationPipe } from '../../pipes/duration.pipe';

const dateString = '2000-01-01';
const durationString = '1min';
const defaultCourse : Course = {
  id: 'Course1',
  title: 'Course 1',
  creationDate : new Date(dateString),
  duration: 1,
  description: 'Test desc',
  topRated: false
};

@Component({
  template: `
    <app-course [course]="course" (delete)="deleteCourse($event)"></app-course>
  `,
})
class TestComponent {
  course : Course = defaultCourse;

  deleteCourse = jasmine.createSpy();
}

describe('CourseComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseComponent,
        TestComponent,
        CourseBorderDirective,
        DurationPipe
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`shows correct duration`, () => {
    const creationDateElement : HTMLElement = fixture.nativeElement.querySelector('.duration');

    expect(creationDateElement.textContent).toBe(durationString);
  });

  it(`shows correct creation date`, () => {
    const creationDateElement : HTMLElement = fixture.nativeElement.querySelector('.creation-date');

    expect(creationDateElement.textContent).toBe(dateString.split('-').reverse().join('-'));
  });

  it(`emits 'delete' event`, () => {
    const deleteButton : HTMLElement = fixture.nativeElement.querySelectorAll('button')[1];

    deleteButton.click();

    expect(component.deleteCourse).toHaveBeenCalledWith(defaultCourse.id);
  });
});
