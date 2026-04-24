function getComponents(adjList) {
    const visited = new Set();
    const components = [];

    function dfs(node, comp) {
        visited.add(node);
        comp.push(node);

        for (let nei of adjList[node]) {
            if (!visited.has(nei)) dfs(nei, comp);
        }
    }

    for (let node in adjList) {
        if (!visited.has(node)) {
            const comp = [];
            dfs(node, comp);
            components.push(comp);
        }
    }

    return components;
}

function buildHierarchy(adjList, node) {
    const children = [...adjList[node]].sort();

    const result = {};
    result[node] = {};

    for (let child of children) {
        Object.assign(result[node], buildHierarchy(adjList, child));
    }

    return result;
}

function calculateDepth(adjList, root) {
    let queue = [[root, 1]];
    let maxDepth = 0;

    while (queue.length) {
        const [node, depth] = queue.shift();
        maxDepth = Math.max(maxDepth, depth);

        for (let child of adjList[node]) {
            queue.push([child, depth + 1]);
        }
    }

    return maxDepth;
}

module.exports = { getComponents, buildHierarchy, calculateDepth };