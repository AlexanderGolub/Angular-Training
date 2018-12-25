import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(courses: any[], property: string, query: string): any[] {
    return courses.filter((course) => {
      return course[property].toString().toLowerCase().includes(query.toLowerCase());
    });
  }

}
