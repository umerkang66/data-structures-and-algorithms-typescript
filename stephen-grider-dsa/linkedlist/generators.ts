function* numbers(): any {
  // in the first generator.next() call, the code inside will be executed, until the yield state is found, when it is found execution of that function is paused, when generator.next() is called second time, if we pass value in it, that becomes "yield result"
  const result = 1 + 1;
  return 20 + (yield result);
}

const generator = numbers();
console.log(generator.next());
console.log(generator.next(5));

function* list() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

// const listGen = list();
// console.log(listGen.next());
// console.log(listGen.next());
// console.log(listGen.next());
// console.log(listGen.next());
// console.log(listGen.next());

// for (const listEl of list()) {
// console.log(listEl);
// }

// NEST GENERATORS
function* lessNumbers() {
  yield 1;
  yield 2;
  yield* moreNumbers();
  yield 6;
  yield 7;
}

function* moreNumbers() {
  yield 3;
  yield 4;
  yield 5;
}

let values = [];
const gen = lessNumbers();
for (const value of gen) {
  values.push(value);
}
console.log(values);

function* loopNumbers(n: number) {
  for (let i = 1; i <= n; i++) {
    yield i;
  }
}

values = [];
const loopNumbersGen = loopNumbers(5);
for (const value of loopNumbersGen) {
  values.push(value);
}
console.log(values);

// TREE
class Tree<T> {
  constructor(public value: T | null = null, public children: Tree<T>[] = []) {}

  *printValues(): any {
    // first yield the head value
    yield this.value;
    // then delegate printValues of each child
    for (let child of this.children) {
      // yield every value, that is being yielded by printValues() of child
      yield* child.printValues();
    }
  }
}

const tree = new Tree<number>(1, [new Tree(2, [new Tree(4)]), new Tree(3)]);

values = [];
for (const value of tree.printValues()) {
  values.push(value);
}
console.log(values);
