import { StyleSheet, Text, View } from "react-native";
const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Text>{props.text}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
});