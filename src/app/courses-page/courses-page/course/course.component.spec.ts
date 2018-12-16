import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import { Course } from '../../course';

const defaultCourse : Course = {
  id: 'Course1',
  title: 'Course 1',
  creationDate : new Date('2000-01-01'),
  duration: 1,
  description: 'Test desc'
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
      declarations: [ CourseComponent, TestComponent ]
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

  it(`emits 'delete' event`, () => {
    const deleteButton : HTMLElement = fixture.nativeElement.querySelectorAll('button')[1];

    deleteButton.click();

    expect(component.deleteCourse).toHaveBeenCalledWith(defaultCourse.id);
  });
});
