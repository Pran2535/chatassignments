import React from "react";
import {
  FlatList,
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
} from "react-native";
import ChatMessage from "./chatmessage";

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
});

export default ChatMessageList;
