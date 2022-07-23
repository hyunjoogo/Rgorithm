class Graph {
  constructor() {
    this.adjacencyList = {
      "A": ["B", "C"],
      "B": ["A", "D"],
      "C": ["A", "E"],
      "D": ["B", "E", "F"],
      "E": ["C", "D", "F"],
      "F": ["D", "E"]
    };
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  DFSRecursive(start) {
    if (!this.adjacencyList[start]) return null;
    let results = [];
    let visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      results.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor)
        }
      });
    })(start);
    return results;
  }
}

const g = new Graph();
console.log(g.DFSRecursive('A'));

