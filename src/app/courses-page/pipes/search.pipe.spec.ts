import { SearchPipe } from './search.pipe';

describe('SearchPipe', () => {
  it('creates an instance', () => {
    const pipe = new SearchPipe();
    expect(pipe).toBeTruthy();
  });

  it('filters array of objects by the given property for the given query', () => {
    const pipe = new SearchPipe();
    const array = [{ prop: 4 }, { prop: 2, id: '22' }, { prop: 3 }, { prop: 2, id: '44' }];
    const filteredArray = [{ prop: 2, id: '22' }, { prop: 2, id: '44' }];
    const result = pipe.transform(array, 'prop', '2');

    expect(result).toBeTruthy(filteredArray);
  });
});
