import { PipeSeparatedListPipe } from './pipe-separated-list.pipe';

describe('PipeSeparatedListPipe', () => {
  let pipe: PipeSeparatedListPipe;

  beforeEach(() => {
    pipe = new PipeSeparatedListPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('return empty string if elements is undefined', () => {
    // When
    const result = pipe.transform(undefined);

    // Then
    expect(result).toBe('');
  });

  it('return empty string if elements is empty', () => {
    // When
    const result = pipe.transform([]);

    // Then
    expect(result).toBe('');
  });

  it('return \'Grenadine | Orange juice | Pineapple juice\'', () => {
    // Given
    const elements = ['Grenadine', 'Orange juice', 'Pineapple juice'];

    // When
    const result = pipe.transform(elements);

    // Then
    expect(result).toBe('Grenadine | Orange juice | Pineapple juice');
  });
});
