import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ChatMessage = ({ message, isUser }) => {
  return (
    <View
      style={[
        styles.messageContainer,
        isUser ? styles.userMessage : styles.otherMessage,
      ]}
    >
      <Text style={styles.messageText}>{message.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
    maxWidth: "70%",
  },
  userMessage: {
    backgroundColor: "#3B82F6",
    alignSelf: "flex-end",
  },
  otherMessage: {
    backgroundColor: "#FFFFFF",
    alignSelf: "flex-start",
  },
  messageText: {
    color: "#000000",
    fontSize: 14,
  },
});

export default ChatMessage;
