import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ SearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`binds 'searchQuery' to input`, () => {
    const searchQuery : string = 'text to search';
    const inputElement : HTMLInputElement = <HTMLInputElement>fixture.nativeElement.querySelector('.form-control');

    inputElement.value = searchQuery;
    inputElement.dispatchEvent(new Event('input'));

    expect(component.searchQuery).toBe(searchQuery);
  });
});
