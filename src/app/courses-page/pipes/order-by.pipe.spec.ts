import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  it('creates an instance', () => {
    const pipe = new OrderByPipe();
    expect(pipe).toBeTruthy();
  });

  it('orders array of objects for the given property', () => {
    const pipe = new OrderByPipe();
    const array = [{ prop: 4 }, { prop: 2 }, { prop: 1 }, { prop: 3 }];
    const sortedArray = [{ prop: 1 }, { prop: 2 }, { prop: 3 }, { prop: 4 }];
    const result = pipe.transform(array, 'prop');

    expect(result).toBeTruthy(sortedArray);
  });
});
