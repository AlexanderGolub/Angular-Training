import { Component, DebugElement } from '@angular/core';
import { CourseBorderDirective } from './course-border.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

const currentDate = new Date();
const offsetTimespan = 14 * 24 * 60 * 60 * 1000;

@Component({
  template: `
    <p [appCourseBorder]="futureDate">Date is in future</p>
    <p [appCourseBorder]="freshDate">Date is in previous 14 days</p>
    <p [appCourseBorder]="oldDate">Date is older than 14 days</p>
  `,
})
class TestComponent {
  futureDate: Date = new Date(currentDate.getTime() + 60000);
  freshDate: Date = new Date(currentDate.getTime() - offsetTimespan + 60000);
  oldDate: Date = new Date(currentDate.getTime()  - offsetTimespan - 60000);
}

describe('CourseBorderDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let elements: DebugElement[];

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ CourseBorderDirective, TestComponent ]
    })
    .createComponent(TestComponent);
    fixture.detectChanges();

    elements = fixture.debugElement.queryAll(By.directive(CourseBorderDirective));
  });

  it('should color first border in blue', () => {
    const borderColor = elements[0].nativeElement.style.borderColor;
    expect(borderColor).toBe('var(--blue)');
  });

  it('should color second border in green', () => {
    const borderColor = elements[1].nativeElement.style.borderColor;
    expect(borderColor).toBe('var(--green)');
  });

  it('should not color third border', () => {
    const borderColor = elements[2].nativeElement.style.borderColor;
    expect(borderColor).not.toBe('var(--blue)');
    expect(borderColor).not.toBe('var(--green)');
  });
});
