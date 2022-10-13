import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

const GoalInput = ({ addGoalHandler, visible, modalHandler }) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (inputText) => {
    setEnteredGoal(inputText);
  };
  const AddGoal = () => {
    addGoalHandler(enteredGoal);
    setEnteredGoal("");
  };
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goals.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goals"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={AddGoal} color="#5e0acc" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={modalHandler} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    width: "90%",
    marginRight: 8,
    padding: 8,
    color: "#120438",
    backgroundColor: "#e4d0ff",
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
    marginTop: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
