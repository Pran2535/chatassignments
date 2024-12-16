import React from "react";
import {
  FlatList,
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";

// ChatMessage Component
const ChatMessage = ({ message, isUser }) => {
  return (
    <View
      style={[
        styles.messageContainer,
        isUser ? styles.userMessage : styles.otherMessage,
      ]}
    >
      {/* Icon for non-user messages */}
      {!isUser && (
        <Feather name="user" size={20} color="#333" style={styles.userIcon} />
      )}
      <View style={styles.messageContent}>
        <Text style={styles.messageText}>{message.text}</Text>
        <Text style={styles.timeText}>12:00 PM</Text>
      </View>
    </View>
  );
};

// ChatMessageList Component
const ChatMessageList = ({
  messages,
  onEndReached,
  isLoading = false,
  hasMoreMessages = true,
}) => {
  // Render loading footer when fetching more messages
  const renderFooter = () => {
    if (!isLoading) return null;

    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#4CAF50" style={styles.loader} />
        <Text style={styles.loadingText}>Loading previous messages...</Text>
      </View>
    );
  };

  // Render empty list placeholder
  const renderEmptyList = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No messages yet</Text>
    </View>
  );

  return (
    <FlatList
      data={messages}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ChatMessage message={item} isUser={item.isUser} />
      )}
      contentContainerStyle={styles.listContainer}
      // Pagination props
      inverted
      onEndReached={onEndReached}
      onEndReachedThreshold={0.1}
      // Loading and empty state
      ListFooterComponent={renderFooter}
      ListEmptyComponent={renderEmptyList}
      // Performance optimization
      removeClippedSubviews={true}
      maxToRenderPerBatch={10}
      initialNumToRender={20}
      windowSize={21}
    />
  );
};

// Styles
const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  loaderContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  loader: {
    marginRight: 10,
  },
  loadingText: {
    color: "#666",
    fontSize: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  emptyText: {
    color: "#999",
    fontSize: 18,
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 12,
    maxWidth: "80%",
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#007BFF",
    borderRadius: 10,
    padding: 8,
  },
  otherMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#EDEDED",
    borderRadius: 10,
    padding: 8,
  },
  userIcon: {
    marginRight: 8,
    marginTop: 4,
  },
  messageContent: {
    justifyContent: "center",
  },
  messageText: {
    color: "#333",
    fontSize: 16,
  },
  timeText: {
    fontSize: 12,
    color: "#999",
    marginTop: 4,
    alignSelf: "flex-end",
  },
});

export default ChatMessageList;
