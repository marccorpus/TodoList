import { useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  View,
  TextInput,
  Pressable,
  Alert,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import colors from "../constants/colors";

const Form = ({ onAddTask }) => {
  const [task, setTask] = useState("");

  const addTaskHandler = () => {
    if (task.trim().length === 0) {
      Alert.alert("Invalid Input", "The task field is required.", [
        { text: "Ok", style: "destructive" },
      ]);

      return;
    }

    onAddTask(task);

    setTask("");

    Keyboard.dismiss();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TextInput
        value={task}
        onChangeText={setTask}
        placeholder="Write a task"
        style={styles.textInput}
      />
      <Pressable
        onPress={addTaskHandler}
        style={({ pressed }) => pressed && styles.buttonPressed}
      >
        <View style={styles.button}>
          <Ionicons name="add" size={24} color={colors.DarkGrey} />
        </View>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 32,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  textInput: {
    backgroundColor: colors.White,
    height: 45,
    flex: 1,
    borderRadius: 60,
    borderColor: colors.LightGrey,
    borderWidth: 1,
    marginRight: 20,
    padding: 12,
    fontSize: 16,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 52,
    backgroundColor: colors.White,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonPressed: {
    opacity: 0.75,
  },
});
