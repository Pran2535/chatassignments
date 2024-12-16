import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ChatMessage = ({ message }) => {
  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>{message.text}</Text>
      </View>
      <Text style={styles.timestamp}>{message.timestamp}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  messageContainer: {
    backgroundColor: "#f1f1f1",
    padding: 10,
    borderRadius: 8,
  },
  messageText: {
    fontSize: 16,
  },
  timestamp: {
    fontSize: 12,
    color: "#555",
  },
});

export default ChatMessage;