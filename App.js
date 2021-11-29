import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Task from "./components/Task";

import TaskHandler from "./components/TaskHandler";

export default function App() {
  const data = ["Do the laundry", "Walk the dog"];

  const [addTaskSelector, setAddTaskSelector] = useState(true);
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState(data);

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Today's tasks</Text>
          <View style={styles.items}>
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </TouchableWithoutFeedback>

      <TaskHandler
        setTask={setTask}
        task={task}
        setTaskItems={setTaskItems}
        taskItems={taskItems}
      />
    </View>
  );
}

/*
 */
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
    flex: 1,
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    flex: 1,
  },
  sectionTitle: {
    color: "rgba(255, 255, 255, 0.89)",
    fontSize: 30,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
});

/*

 <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Image
              style={styles.iconDefault}
              source={require("./assets/circle.png")}
            />
            <TextInput
              style={styles.input}
              placeholder={"Add a new task"}
              placeholderTextColor={"rgba(255, 255, 255, 0.69)"}
              onSubmitEditing={() => handleAddTask()}
              onChangeText={(text) => setTask(text)}
              value={task}
            />
          </View>
        </TouchableOpacity>
*/
