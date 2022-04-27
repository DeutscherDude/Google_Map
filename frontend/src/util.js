function time (duration) {
    let travelTimeHours = Math.floor(duration/(60*60));
    let travelTimeMinutes = Math.ceil((duration%(60*60))/60);
    return `${travelTimeHours}hrs ${travelTimeMinutes}mins`;
  }

function distanceKm(distance) {
    let distanceInKm = distance/1000
    distanceInKm = +distanceInKm.toFixed(2);
    return distanceInKm;
  }

function tripCost (distance){
    let cost = distanceKm(distance) * 0.0701 * 1.1;
    cost = +cost.toFixed(2);
    return cost;
  }

exports.time = time;
exports.distanceKm = distanceKm;
exports.tripCost = tripCost;