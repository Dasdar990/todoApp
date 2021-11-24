import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor:
      "linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08)), #121212",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    height: 22,
    width: 22,
    backgroundColor: "rgba(255, 255, 255, 0.89)",
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    color: "rgba(255, 255, 255, 0.89)",
    fontSize: 18,
    maxWidth: "80%",
  },
  circular: {
    width: 12,
    height: 12,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.5)",
  },
});

export default Task;
