import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const GoalInput = ({ addGoalHandler }) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (inputText) => {
    setEnteredGoal(inputText);
  };
  const AddGoal = () => {
    addGoalHandler(enteredGoal);
    setEnteredGoal("");
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goals"
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="Add Goal" onPress={AddGoal} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
