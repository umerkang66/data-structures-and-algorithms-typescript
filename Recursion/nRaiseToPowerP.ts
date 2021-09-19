const nRaiseToPowerP = (n: number, p: number): number => {
    if (p === 0) return 1;
    return n * nRaiseToPowerP(n, p - 1);
};

console.log(nRaiseToPowerP(4, 3));
