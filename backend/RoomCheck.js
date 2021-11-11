import "react-native-sqlite-storage";
import REACT, { Component } from "react";
import { openDatabase } from "react-native-sqlite-storage";
import { closeDatabase } from "react-native-sqlite-storage";

export const createConnection = async () => {
  return openDatabase({ name: "LSU.db", location: "default" });
};

export const closeConnection = async () => {
  return closeDatabase({ name: "LSU.db", location: "default" });
};

const checkRoom = async (srcRoom, destRoom, srcBuilding, destBuilding) => {
  let validRooms = false;
  if (srcRoom == "-1") {
    let noStartingPoint = true;
  } else {
    let noStartingPoint = false;
  }
  const db = await createConnection();
  const destQuery = `SELECT EXISTS(SELECT 1 FROM ${destBuilding} WHERE ROOM_NUMBER = ${destRoom};`;
  let destValid = await db.executeSql(destQuery);
  if (noStartingPoint && parseInt(destValid) == 1) {
    validRooms = true;
  }
  //need if statement for whether there is no destination room
  //then the following code will be in an else statement
  else {
    if (srcRoom == destRoom) {
      return validRooms;
    }
    const srcQuery = `SELECT EXISTS(SELECT 1 FROM ${srcBuilding} WHERE ROOM_NUMBER = ${srcRoom};`;
    let srcValid = await db.executeSql(srcQuery);
    if (parseInt(srcValid) == 1 && parseInt(destValid) == 1) {
      validRooms = true;
    }
  }
  await closeConnection(); //idk if this works
  return validRooms;
};

export default checkRoom;
