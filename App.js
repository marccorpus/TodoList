import { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Text,
  View,
} from "react-native";

import Tasks from "./src/components/Tasks";
import Form from "./src/components/Form";

import colors from "./src/constants/colors";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTaskHandler = (value) => {
    const data = { id: new Date().toISOString(), text: value };

    setTasks((prevTasks) => [data, ...prevTasks]);
  };

  const deleteTaskHandler = (id) => {
    setTasks((prevTasks) => prevTasks.filter((prevTask) => prevTask.id !== id));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Today's Tasks</Text>

        <Tasks tasks={tasks} onDeleteTask={deleteTaskHandler} />
      </View>

      <Form onAddTask={addTaskHandler} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.Primary,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    marginBottom: 100,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
