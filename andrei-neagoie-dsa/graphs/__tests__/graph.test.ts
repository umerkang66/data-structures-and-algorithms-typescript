import { Graph } from '../graph';

test('can add vertex correctly', () => {
  const myGraph = new Graph<number>();
  myGraph.addVertex(0);
  myGraph.addVertex(1);
  myGraph.addVertex(2);
  myGraph.addVertex(3);
  myGraph.addVertex(4);
  myGraph.addVertex(5);
  myGraph.addVertex(6);

  expect(myGraph.adjacentList[0]).toEqual([]);
  expect(myGraph.adjacentList[1]).toEqual([]);
  expect(myGraph.adjacentList[2]).toEqual([]);
  expect(myGraph.adjacentList[3]).toEqual([]);
  expect(myGraph.adjacentList[4]).toEqual([]);
  expect(myGraph.adjacentList[5]).toEqual([]);
  expect(myGraph.adjacentList[6]).toEqual([]);
});

test('can add edges correctly between nodes', () => {
  const myGraph = new Graph<number>();
  myGraph.addVertex(0);
  myGraph.addVertex(1);
  myGraph.addVertex(2);
  myGraph.addVertex(3);
  myGraph.addVertex(4);
  myGraph.addVertex(5);
  myGraph.addVertex(6);
  myGraph.addEdge(3, 1);
  myGraph.addEdge(3, 4);
  myGraph.addEdge(4, 2);
  myGraph.addEdge(4, 5);
  myGraph.addEdge(1, 2);
  myGraph.addEdge(1, 0);
  myGraph.addEdge(0, 2);
  myGraph.addEdge(6, 5);

  const result =
    '0 --> 1 2 \n1 --> 3 2 0 \n2 --> 4 1 0 \n3 --> 1 4 \n4 --> 3 2 5 \n5 --> 4 6 \n6 --> 5 ';

  expect(myGraph.showConnections()).toBe(result);
});
