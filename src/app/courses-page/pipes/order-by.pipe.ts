import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(courses: any[], propertyName: string): any[] {
    return courses.sort((a, b) => a[propertyName] - b[propertyName]);
  }

}
