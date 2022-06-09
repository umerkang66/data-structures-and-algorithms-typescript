export function same(arr1: number[], arr2: number[]): boolean {
    if (arr1.length !== arr2.length) {
        return false;
    }
    interface Hash {
        [key: number]: number;
    }
    const hash: Hash = {};
    for (const num of arr1) {
        const square = num ** 2;
        // set square as key, and counter as value
        if (hash[square]) hash[square] += 1;
        else hash[square] = 1;
    }
    for (const num of arr2) {
        if (hash[num] && hash[num] > 0) {
            hash[num] -= 1;
        } else {
            return false;
        }
    }
    return true;
}
