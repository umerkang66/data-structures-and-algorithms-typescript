import { pyramid, pyramidRecursive } from './index';

test('pyramid is a function', () => {
  expect(typeof pyramid).toEqual('function');
  expect(typeof pyramidRecursive).toEqual('function');
});

test('prints a pyramid for n = 2', () => {
  const ans = ' # \n###';

  expect(pyramid(2)).toEqual(ans);
  expect(pyramidRecursive(2)).toEqual(ans);
});

test('prints a pyramid for n = 3', () => {
  const ans = '  #  \n ### \n#####';

  expect(pyramid(3)).toEqual(ans);
  expect(pyramidRecursive(3)).toEqual(ans);
});

test('prints a pyramid for n = 4', () => {
  const ans = '   #   \n  ###  \n ##### \n#######';

  expect(pyramid(4)).toEqual(ans);
  expect(pyramidRecursive(4)).toEqual(ans);
});
