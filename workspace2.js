import d3

function force(alpha) {
  for (var i = 0, n = nodes.length, node, k = alpha * 0.1; i < n; i++) {
    node = nodes[i];
    node.vx -= node.x * k;
    node.vy -= node.y * k;
  }
}
