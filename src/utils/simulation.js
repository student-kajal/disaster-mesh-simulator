import { Graph } from '@snyk/graphlib';

export function calculatePathBFS(devices, startId, endId) {
  if (startId === endId) return [startId];
  
  const graph = new Graph({ directed: false });
  
  // Create network graph
  devices.forEach(device => {
    graph.setNode(device.id);
    devices.forEach(other => {
      if (device.id !== other.id && 
          Math.hypot(device.x - other.x, device.y - other.y) <= device.range) {
        graph.setEdge(device.id, other.id);
      }
    });
  });

  // BFS implementation for shortest path
  const queue = [[startId]];
  const visited = new Set([startId]);

  while (queue.length > 0) {
    const path = queue.shift();
    const node = path[path.length - 1];

    if (node === endId) return path;

    graph.neighbors(node)?.forEach(neighbor => {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([...path, neighbor]);
      }
    });
  }

  return []; // No path found
}
