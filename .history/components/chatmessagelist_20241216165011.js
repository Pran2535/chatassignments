import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ChatMessage from "./chatmessage";

const ChatMessageList = ({ messages }) => {
  return (
    <FlatList
      data={messages}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ChatMessage message={item} isUser={item.isUser} />
      )}
      contentContainerStyle={styles.listContainer}
      inverted
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
});

export default ChatMessageList;
