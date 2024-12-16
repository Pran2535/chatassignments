import React from "react";
import { FlatList, StyleSheet } from "react-native";
import ChatMessage from "./ChatMessage";

const ChatMessageList = ({ messages, onScroll }) => {
  return (
    <FlatList
      data={messages}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ChatMessage message={item} />}
      onScroll={onScroll}
      contentContainerStyle={styles.listContainer}
      inverted
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingTop: 12,
  },
});

export default ChatMessageList;
