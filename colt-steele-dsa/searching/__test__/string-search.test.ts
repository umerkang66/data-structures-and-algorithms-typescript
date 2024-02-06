import { stringSearch } from '../string-search';

it('returns the correct index of target str', () => {
  const str1 = 'my name is umer';
  const str2 = 'name';
  const index = stringSearch(str1, str2);

  expect(index).toBe(3);
});

it('return -1 if target str is not found', () => {
  const str1 = 'my name is umer';
  const str2 = 'naming';
  const index = stringSearch(str1, str2);

  expect(index).toBe(-1);
});
