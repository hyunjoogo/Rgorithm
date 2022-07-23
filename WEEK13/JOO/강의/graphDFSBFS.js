class Graph {
  constructor() {
    this.adjacencyList = {
      1: [2, 3, 4],
      2: [1, 4],
      3: [1, 4],
      4: [1, 2, 3],
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
          return dfs(neighbor);
        }
      });
    })(start);
    return results;
  }

  DFSIterative(start) {
    const stack = [start];
    let results = [];
    let visited = {};
    let currentVertex;


    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      results.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return results;
  }

  BFS(start) {
    const queue = [start];
    const results = [];
    const visited = {};
    visited[start] = true;
    let currentVertex;

    while (queue.length) {
      currentVertex = queue.shift();
      results.push(currentVertex);
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return results;
  }
}

const g = new Graph();
console.log(g.DFSRecursive(1));
console.log(g.DFSIterative(1));
console.log(g.BFS(1));

