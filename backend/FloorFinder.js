const FloorFinder = (building, roomNumber) => {
  let floor = "";
  if (building == "bec") {
    floor = "bec1";
  } else if (building == "pft") {
    if (roomNumber < 2000) floor = "pft1";
    else floor = "pft2";
  } else if (building == "loc") {
    if (roomNumber < 100) floor = "loc0";
    else if (roomNumber < 200) floor = "loc1";
    else floor = "loc2";
  }
  return floor;
};

export default FloorFinder;
