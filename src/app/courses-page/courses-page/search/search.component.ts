import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>();
  @ViewChild('input') input;

  public searchQuery : string = '';

  ngAfterViewInit() {
    this.input.update
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((value) => {
        if (value.length > 3 || !value) {
          this.search.emit(value);
        }
      });
  }
}
