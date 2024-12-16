import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import axios from "axios";
import ChatHeader from "./chatheader";
import ChatMessageList from "./chatmessagelist";
import InputBox from "./inputbox";

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMoreMessages, setHasMoreMessages] = useState(true);

  const fetchMessages = useCallback(
    async (currentPage, isInitial = false) => {
      if (!hasMoreMessages && !isInitial) return;

      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://qa.corider.in/assignment/chat?page=${currentPage}`
        );

        const formattedMessages = response.data.chats.map((msg, index) => ({
          id: `${currentPage}-${index}`,
          text: msg.message,
          isUser: Math.random() > 0.5, // Simulate user vs others
          timestamp: msg.timestamp || new Date().toISOString(),
        }));

        // If it's initial load, set messages directly
        if (isInitial) {
          setMessages(formattedMessages);
        } else {
          // For pagination, prepend new messages
          setMessages((prevMessages) => [
            ...formattedMessages,
            ...prevMessages,
          ]);
        }

        // Check if there are more messages to load
        setHasMoreMessages(formattedMessages.length > 0);
      } catch (error) {
        console.error("Error fetching messages:", error);
        setHasMoreMessages(false);
      } finally {
        setIsLoading(false);
      }
    },
    [hasMoreMessages]
  );

  // Initial fetch
  useEffect(() => {
    fetchMessages(0, true);
  }, []);

  // Handle scroll to top and load more messages
  const handleLoadMore = () => {
    if (!isLoading && hasMoreMessages) {
      setPage((prevPage) => {
        const nextPage = prevPage + 1;
        fetchMessages(nextPage);
        return nextPage;
      });
    }
  };

  // Loading indicator component
  const renderLoader = () => {
    return isLoading ? (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#4CAF50" style={styles.loader} />
      </View>
    ) : null;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ChatHeader />
        <View style={styles.chatBox}>
          <ChatMessageList
            messages={messages}
            onEndReached={handleLoadMore}
            ListFooterComponent={renderLoader}
            // Assuming ChatMessageList supports these props
            initialNumToRender={20}
            onEndReachedThreshold={0.1}
          />
        </View>
        <InputBox
          onSendMessage={(newMessage) => {
            // Add new message to the list
            setMessages((prevMessages) => [
              {
                id: `new-${Date.now()}`,
                text: newMessage,
                isUser: true,
                timestamp: new Date().toISOString(),
              },
              ...prevMessages,
            ]);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F3F7FA",
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 5,
    elevation: 10,
  },
  chatBox: {
    flex: 1,
    backgroundColor: "#F9FAFC",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  loaderContainer: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    marginVertical: 10,
  },
});

export default ChatScreen;
