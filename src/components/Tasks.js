import { StyleSheet, View, FlatList } from "react-native";

import Task from "./Task";

const Tasks = ({ tasks, onDeleteTask }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <Task {...item} onDeleteTask={onDeleteTask} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
});
