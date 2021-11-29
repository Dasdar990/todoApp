import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
} from "react-native";

const TaskHandler = (props) => {
  const [addTaskSelector, setAddTaskSelector] = useState(true);

  const showAddTask = () => {
    setAddTaskSelector(!addTaskSelector);
  };

  const handleAddTask = () => {
    Keyboard.dismiss();
    if (props.task != null) {
      props.setTaskItems([...props.taskItems, props.task]);
      props.setTask(null);
    }
    showAddTask();
  };

  if (addTaskSelector)
    return (
      <TouchableOpacity
        style={styles.addTaskButtonWrapper}
        onPress={showAddTask}>
        <View style={styles.addWrapper}>
          <Image
            style={styles.iconDefault}
            source={require("../assets/plus.png")}
          />
          <Text style={styles.addText}>Add a new task</Text>
        </View>
      </TouchableOpacity>
    );
  else
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.addTaskWrapper}>
        <Image
          style={styles.iconDefault}
          source={require("../assets/circle.png")}
        />
        <TextInput
          autoFocus={true}
          style={styles.input}
          placeholder={"Add a new task"}
          placeholderTextColor={"rgba(255, 255, 255, 0.69)"}
          onSubmitEditing={handleAddTask}
          onChangeText={(text) => props.setTask(text)}
          value={props.task}
        />
      </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
  addTaskButtonWrapper: {
    position: "absolute",
    bottom: 60,
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 20,
  },
  addText: {
    color: "rgba(255, 255, 255, 0.69)",
    fontSize: 15,
    fontWeight: "400",
  },
  addWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor:
      "linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08)), #121212",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: "100%",
  },
  addTaskWrapper: {
    position: "absolute",
    bottom: 60,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    backgroundColor:
      "linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08)), #121212",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  input: {
    width: "100%",
    flexWrap: "wrap",
    paddingVertical: 20,
    color: "rgba(255, 255, 255, 0.69)",
  },
  iconDefault: {
    height: 18,
    width: 18,
    marginRight: 10,
  },
});
export default TaskHandler;
