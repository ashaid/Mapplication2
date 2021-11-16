import SQLite from "react-native-sqlite-storage";
import REACT, { Component } from "react";
import { openDatabase } from "react-native-sqlite-storage";
import { closeDatabase } from "react-native-sqlite-storage";

const checkRoom = async (srcRoom, destRoom, srcBuilding, destBuilding) => {
  let validRooms = false;
  if (srcRoom == "-1") {
    let noStartingPoint = true;
  } else {
    let noStartingPoint = false;
  }
  const db = SQLite.openDatabase({name : "LSU.db", readOnly : true, createFromLocation : 1});
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
  SQLite.closeDatabase(db);
  return validRooms;
};

export default checkRoom;
