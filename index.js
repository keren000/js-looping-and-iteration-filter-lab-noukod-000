// Code your solution in this file
function findMatching(drivers, driverName) {
  return drivers.filter(function (driver) {
    return driver.toLowerCase() === driverName.toLowerCase();
  });
}

function fuzzyMatch(drivers, fuzz) {
  return drivers.filter(function (driver) {
    return driver[0,1] === fuzz[0,1];
  });
}

function matchName(drivers, string) {
  return drivers.filter(function (driver) {
    return driver.name === string;
  });
}
