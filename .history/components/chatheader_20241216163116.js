import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const ChatHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trip 1</Text>
      <TouchableOpacity style={styles.optionsButton}>
        <Feather name="more-vertical" size={24} color="#333" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  optionsButton: {
    padding: 8,
  },
});

export default ChatHeader;
