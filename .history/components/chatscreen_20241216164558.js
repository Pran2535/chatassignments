import React, { useState, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import axios from "axios";
import ChatHeader from "./chatheader";
import ChatMessageList from "./chatmessagelist";

const ChatScreen = () => {
  const [messages, setMessages] = useState([]); // Store chat messages
  const [page, setPage] = useState(0); // Track current page for pagination
  const [loading, setLoading] = useState(false); // Prevent duplicate calls

  // Fetch messages from API
  const fetchMessages = async () => {
    if (loading) return; // Prevent concurrent API calls
    setLoading(true);

    try {
      const response = await axios.get(
        `https://qa.corider.in/assignment/chat?page=${page}`
      );

      // Check if response data is valid
      const newMessages = response.data.chats || [];
      setMessages((prevMessages) => [...newMessages, ...prevMessages]); // Append older messages
      setPage(page + 1); // Increment page
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setLoading(false); // Stop loader
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  // Handle scroll to top
  const handleScroll = ({ nativeEvent }) => {
    const { contentOffset } = nativeEvent;

    if (contentOffset.y <= 0 && !loading) {
      fetchMessages();
    }
  };

  return (
    <View style={styles.container}>
      <ChatHeader />
      <ChatMessageList messages={messages} onScroll={handleScroll} />

      {loading && (
        <ActivityIndicator size="small" color="#333" style={styles.loader} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loader: {
    marginVertical: 10,
  },
});

export default ChatScreen;
