import React from "react";
import { FlatList, StyleSheet } from "react-native";
import ChatMessage from "./chatmessage";

const ChatMessageList = ({ messages, onScroll }) => {
  return (
    <FlatList
      data={messages}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ChatMessage message={item} />}
      onScroll={onScroll}
      scrollEventThrottle={16} // Optimize scroll handling
      contentContainerStyle={styles.listContainer}
      inverted // Show newest messages at the bottom
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 16,
  },
});

export default ChatMessageList;
