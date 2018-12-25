import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../course';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(courses: Course[], propertyToSearch: string, query: string): Course[] {
    return courses.filter((course) => {
      return course[propertyToSearch].toString().toLowerCase().includes(query.toLowerCase());
    });
  }

}
