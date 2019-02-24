import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>();

  public searchQuery : string = '';
  private timeoutId : any;

  onSearch(event) {
    const searchQuery = event.target.value;
    this.searchQuery = searchQuery;
    clearTimeout(this.timeoutId);

    if (searchQuery.length > 3) {
      this.timeoutId = setTimeout(() => {
        this.search.emit(this.searchQuery);
      }, 500);
    }
  }
}
