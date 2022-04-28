function time (duration, distance) {
  if (distance > 800000) {
    return `${Math.ceil(distance/800000)}days`
    }
    let travelTimeHours = Math.floor(duration/(60*60));
    let travelTimeMinutes = Math.ceil((duration%(60*60))/60);
    return `${travelTimeHours}hrs ${travelTimeMinutes}mins`;
  }

function distanceKm(distance) {
    let distanceInKm = distance/1000
    distanceInKm = +distanceInKm.toFixed(2);
    return distanceInKm;
  }

function tripCost (kmCost, distance){
  if (kmCost === undefined) {
      kmCost = 0.0701;
    }
  if(distance > 800000){
    return Math.ceil(distance/800000) * 1000
  }
    let cost = distanceKm(distance) * kmCost * 1.1;
    cost = +cost.toFixed(2);
    return cost;
  }

exports.time = time;
exports.distanceKm = distanceKm;
exports.tripCost = tripCost;