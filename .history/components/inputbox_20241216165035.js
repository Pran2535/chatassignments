import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const InputBox = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconButton}>
        <Feather name="smile" size={24} color="#666" />
      </TouchableOpacity>
      <TextInput
        placeholder="Reply to @Rohit Yadav"
        style={styles.input}
        placeholderTextColor="#999"
      />
      <TouchableOpacity style={styles.iconButton}>
        <Feather name="camera" size={24} color="#666" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <Feather name="mic" size={24} color="#666" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    borderRadius: 25,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginHorizontal: 8,
    color: "#333",
  },
  iconButton: {
    padding: 8,
  },
});

export default InputBox;
