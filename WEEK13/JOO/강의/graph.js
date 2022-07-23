class Graph {
  constructor() {
    this.adjacencyList = {
      "Tokyo": ["Dallas", "Hong Kong"],
      "Dallas": ["Tokyo", "Aspen", "Hong Kong", "Los Angeles"],
      "Aspen": ["Dallas"],
      "Hong Kong": ["Tokyo", "Dallas", "Los Angeles"],
      "Los Angeles": ["Hong Kong", "Dallas"]
    };
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  // 무방향 그래프일 경우 두 개의 정점에 대해서 추가해줘야한다.
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(value => value !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(value => value !== vertex1);
  }

  removeVertex(vertex) {
    // for (let i of this.adjacencyList[vertex]) {
    //   this.removeEdge(vertex, i)
    // }
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

}

const g = new Graph();

g.removeVertex('Tokyo');
console.log(g);
