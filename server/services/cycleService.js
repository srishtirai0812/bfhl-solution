function detectCycle(adjList, nodes) {
    const visited = new Set();
    const stack = new Set();

    function dfs(node) {
        if (stack.has(node)) return true;
        if (visited.has(node)) return false;

        visited.add(node);
        stack.add(node);

        for (let nei of adjList[node]) {
            if (dfs(nei)) return true;
        }

        stack.delete(node);
        return false;
    }

    for (let node of nodes) {
        if (dfs(node)) return true;
    }

    return false;
}

module.exports = { detectCycle };