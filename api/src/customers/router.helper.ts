function calculateTotalDistance(route) {
  let totalDistance = 0;
  for (let i = 0; i < route.length - 1; i++) {
    totalDistance += calculateDistance(route[i], route[i + 1]);
  }
  totalDistance += calculateDistance(route[route.length - 1], route[0]);
  return totalDistance;
}

function calculateDistance(customer1, customer2) {
  return Math.sqrt(
    Math.pow(customer1.x - customer2.x, 2) +
      Math.pow(customer1.y - customer2.y, 2),
  );
}

export function nearestNeighborAlgorithm(waypoints) {
  const unvisitedWaypoints = [...waypoints];
  const route = [];
  let currentWaypoint = { id: 0, x: 0, y: 0 };

  while (unvisitedWaypoints.length > 0) {
    let nearestWaypoint = null;
    let shortestDistance = Infinity;

    for (const nextWaypoint of unvisitedWaypoints) {
      const distance = calculateDistance(currentWaypoint, nextWaypoint);
      if (distance < shortestDistance) {
        shortestDistance = distance;
        nearestWaypoint = nextWaypoint;
      }
    }

    route.push(currentWaypoint);
    currentWaypoint = nearestWaypoint;
    unvisitedWaypoints.splice(unvisitedWaypoints.indexOf(nearestWaypoint), 1);
  }

  route.push(currentWaypoint);
  const totalDistance = calculateTotalDistance(route);

  route.shift();

  return { route, distance: totalDistance };
}
