interface AdjacentList<T> {
  [key: string]: T[];
}

export class Graph<T> {
  public adjacentList: AdjacentList<T> = {};
  public numberOfNodes: number = 0;

  public addVertex(node: T): void {
    this.adjacentList[JSON.stringify(node)] = [];
    this.numberOfNodes++;
  }

  public addEdge(node1: T, node2: T): void {
    this.adjacentList[JSON.stringify(node1)].push(node2);
    this.adjacentList[JSON.stringify(node2)].push(node1);
  }

  public showConnections(): string {
    let nodeConnections = '';

    const nodes = Object.keys(this.adjacentList);
    nodes.forEach((node, i, nodesArray) => {
      let connections = '';
      this.adjacentList[node].forEach(vertex => {
        connections += vertex + ' ';
      });
      nodeConnections += `${node} --> ${connections}`;
      if (i < nodesArray.length - 1) {
        nodeConnections += '\n';
      }
    });

    return nodeConnections;
  }
}
