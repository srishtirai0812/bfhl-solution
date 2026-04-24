function parseEdge(raw) {
    if (!raw || typeof raw !== "string") return { valid: false };

    const cleaned = raw.trim();

    const match = cleaned.match(/^([A-Z])->([A-Z])$/);
    if (!match) return { valid: false };

    const parent = match[1];
    const child = match[2];

    if (parent === child) return { valid: false };

    return { valid: true, parent, child, original: cleaned };
}

module.exports = { parseEdge };