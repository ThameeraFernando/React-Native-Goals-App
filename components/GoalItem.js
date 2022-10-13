import { StyleSheet, Text, View, Pressable } from "react-native";
const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={props.onDeleteItem.bind(this, props.Key)}
      >
        <Text style={styles.textStyle}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  textStyle: {
    color: "white",
    padding: 8,
  },
});
