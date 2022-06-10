import { validAnagram, sameArrSquared } from '../frequency-counter';

describe('Same Array', () => {
    test('sameArrSquared function exists', () => {
        expect(typeof sameArrSquared).toEqual('function');
    });

    test('return true if arrays are same', () => {
        expect(sameArrSquared([1, 9, 9, 2, 8, 3], [4, 64, 1, 81, 9, 81])).toBe(
            true
        );
    });

    test('return false if arrays are same', () => {
        expect(sameArrSquared([1, 10, 9, 2, 8, 3], [2, 8, 1, 9, 3, 9])).toBe(
            false
        );
    });
});

describe('Anagrams', () => {
    test('anagrams function exists', () => {
        expect(typeof validAnagram).toEqual('function');
    });

    test('"hello" is an anagram of "llohe"', () => {
        expect(validAnagram('hello', 'llohe')).toBeTruthy();
    });

    test('"Whoa! Hi!" is an anagram of "Hi! Whoa!"', () => {
        expect(validAnagram('Whoa! Hi!', 'Hi! Whoa!')).toBeTruthy();
    });

    test('"One One" is not an anagram of "Two two two"', () => {
        expect(validAnagram('One One', 'Two two two')).toBeFalsy();
    });

    test('"One one" is not an anagram of "One one c"', () => {
        expect(validAnagram('One one', 'One one c')).toBeFalsy();
    });

    test('"A tree, a life, a bench" is not an anagram of "A tree, a fence, a yard"', () => {
        expect(
            validAnagram('A tree, a life, a bench', 'A tree, a fence, a yard')
        ).toBeFalsy();
    });
});
