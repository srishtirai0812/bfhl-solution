const { parseEdge } = require("../services/edgeValidator");
const { createGraph } = require("../services/graphService");
const { detectCycle } = require("../services/cycleService");
const { getComponents, buildHierarchy, calculateDepth } = require("../services/hierarchyService");

exports.processData = (req, res) => {
    const { data } = req.body;

    const invalid = [];
    const duplicates = [];
    const seen = new Set();
    const validEdges = [];

    for (let item of data) {
        const parsed = parseEdge(item);

        if (!parsed.valid) {
            invalid.push(item);
            continue;
        }

        const key = `${parsed.parent}->${parsed.child}`;

        if (seen.has(key)) {
            if (!duplicates.includes(key)) duplicates.push(key);
            continue;
        }

        seen.add(key);
        validEdges.push(parsed);
    }

    const { adjList, indegree } = createGraph(validEdges);
    const components = getComponents(adjList);

    const hierarchies = [];
    let totalTrees = 0;
    let totalCycles = 0;
    let maxDepth = 0;
    let bestRoot = "";

    for (let comp of components) {
        const hasCycle = detectCycle(adjList, comp);

        let rootCandidates = comp.filter(n => indegree[n] === 0);

        let root =
            rootCandidates.length > 0
                ? rootCandidates.sort()[0]
                : comp.sort()[0];

        if (hasCycle) {
            totalCycles++;
            hierarchies.push({ root, tree: {}, has_cycle: true });
        } else {
            const tree = buildHierarchy(adjList, root);
            const depth = calculateDepth(adjList, root);

            totalTrees++;

            if (depth > maxDepth || (depth === maxDepth && root < bestRoot)) {
                maxDepth = depth;
                bestRoot = root;
            }

            hierarchies.push({ root, tree, depth });
        }
    }

    res.json({
        user_id: "srishtirai_12082004",
        email_id: "srishtirai0402@gmail.com",
        college_roll_number: "RA2311003020318",
        hierarchies,
        invalid_entries: invalid,
        duplicate_edges: duplicates,
        summary: {
            total_trees: totalTrees,
            total_cycles: totalCycles,
            largest_tree_root: bestRoot
        }
    });
};