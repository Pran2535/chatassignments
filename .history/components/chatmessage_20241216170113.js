import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ChatMessage = ({ message }) => {
  const isMyMessage = message.sender === "You"; // Customize sender condition
  return (
    <View
      style={[
        styles.container,
        isMyMessage ? styles.myMessageContainer : styles.otherMessageContainer,
      ]}
    >
      <View
        style={[
          styles.messageBubble,
          isMyMessage ? styles.myMessageBubble : styles.otherMessageBubble,
        ]}
      >
        <Text style={styles.messageText}>{message.text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: 4,
    paddingHorizontal: 12,
  },
  myMessageContainer: {
    justifyContent: "flex-end",
  },
  messageBubble: {
    maxWidth: "80%",
    padding: 10,
    borderRadius: 12,
  },
  myMessageBubble: {
    backgroundColor: "#006DFF",
    borderBottomRightRadius: 0,
  },
  otherMessageBubble: {
    backgroundColor: "#F2F3F5",
    borderBottomLeftRadius: 0,
  },
  messageText: {
    fontSize: 14,
    color: "#000",
  },
});

export default ChatMessage;
