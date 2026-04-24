function createGraph(edges) {
    const adjList = {};
    const indegree = {};

    for (const { parent, child } of edges) {
        if (!adjList[parent]) adjList[parent] = [];
        if (!adjList[child]) adjList[child] = [];

        adjList[parent].push(child);

        indegree[child] = (indegree[child] || 0) + 1;
        if (!indegree[parent]) indegree[parent] = indegree[parent] || 0;
    }

    return { adjList, indegree };
}

module.exports = { createGraph };