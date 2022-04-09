import { StyleSheet, Pressable, View, Text } from "react-native";

import colors from "../constants/colors";

const Task = ({ id, text, onDeleteTask }) => {
  return (
    <Pressable
      onPress={() => onDeleteTask(id)}
      style={({ pressed }) => pressed && styles.buttonPressed}
    >
      <View style={[styles.container]}>
        <View style={styles.leftContent}>
          <View style={styles.square}></View>

          <Text style={styles.text}>{text}</Text>
        </View>
        <View style={styles.circle}></View>
      </View>
    </Pressable>
  );
};

export default Task;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.White,
    borderRadius: 10,
    borderColor: colors.LightGrey,
    borderWidth: 1,
    padding: 16,
    marginVertical: 8,
    elevation: 3,
    shadowColor: colors.Black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  buttonPressed: {
    opacity: 0.75,
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: colors.Accent,
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  text: {
    flex: 1,
    maxWidth: "80%",
  },
  circle: {
    width: 12,
    height: 12,
    borderWidth: 2,
    borderColor: colors.Accent,
    borderRadius: 5,
  },
});
