import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../course';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(courses: Course[], propertyName: string): Course[] {
    return courses.sort((a, b) => a[propertyName] - b[propertyName]);
  }

}
