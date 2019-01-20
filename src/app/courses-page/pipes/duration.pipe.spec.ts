import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  it('creates an instance', () => {
    const pipe = new DurationPipe();
    expect(pipe).toBeTruthy();
  });

  it('converts time', () => {
    const pipe = new DurationPipe();
    const result = pipe.transform(125);

    expect(result).toBe('2h 5min');
  });

  it('omits empty hours', () => {
    const pipe = new DurationPipe();
    const result = pipe.transform(25);

    expect(result).toBe('25min');
  });
});
