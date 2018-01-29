// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function (d) {
    return d.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, name) {
  return drivers.filter(function (d) {
    return d[0].toLowerCase() === name[0].toLowerCase();
  });
}

function matchName(drivers, name) {
  return drivers.filter(function (d) {
    return d.name === name;
  });
}
