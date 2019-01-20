import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCourseBorder]'
})
export class CourseBorderDirective {
  @Input() set appCourseBorder(creationDate : Date) {
    const creationDateTime = creationDate.getTime();
    const currentDateTime = new Date().getTime();
    const offsetTimespan = 14 * 24 * 60 * 60 * 1000;

    if (creationDateTime < currentDateTime && creationDateTime >= currentDateTime - offsetTimespan) {
      this.renderer.setStyle(this.element.nativeElement, 'border-color', 'var(--green)');
    } else if (creationDateTime > currentDateTime) {
      this.renderer.setStyle(this.element.nativeElement, 'border-color', 'var(--blue)');
    }
  }

  constructor(private element: ElementRef, private renderer: Renderer2) { }

}
