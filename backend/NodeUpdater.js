const NodeUpdater = (startingBuilding, destinationBuilding) => {
  nodeArr = [];
  let entranceNode,
    exitNode = "";
  if (startingBuilding == "bec") {
    exitNode = 9999;
    if (destinationBuilding == "pft") {
      entranceNode = 9998;
    } else if (destinationBuilding == "loc") {
      entranceNode = 9999;
    }
  } else if (startingBuilding == "loc") {
    exitNode = 9999;
    if (destinationBuilding == "pft" || destinationBuilding == "bec") {
      entranceNode = 9999;
    }
  } else if (startingBuilding == "pft") {
    if (destinationBuilding == "bec") {
      exitNode = 9998;
      entranceNode = 9999;
    } else if (destinationBuilding == "loc") {
      exitNode = 9999;
      entranceNode = 9999;
    }
  } else if ((startingBuilding = -1)) {
    entranceNode = 9999;
  }

  nodeArr.push(entranceNode);
  nodeArr.push(exitNode);
  return nodeArr;
};

export default NodeUpdater;
