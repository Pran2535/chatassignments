import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const ChatHeader = () => {
  return (
    <View style={styles.container}>
      <Feather name="arrow-left" size={24} color="#333" />
      <View>
        <Text style={styles.title}>Trip 1</Text>
        <Text style={styles.subtitle}>
          From <Text style={styles.boldText}>IGI Airport, T3</Text> To{" "}
          <Text style={styles.boldText}>Sector 28</Text>
        </Text>
      </View>
      <TouchableOpacity>
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
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderColor: "#E0E0E0",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
  },
  boldText: {
    fontWeight: "bold",
    color: "#333",
  },
});

export default ChatHeader;
