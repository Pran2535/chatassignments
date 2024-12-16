import React, { useState, useEffect } from "react";
import { View } from "react-native";
import axios from "axios";
import ChatHeader from "./chatheader";
import ChatMessageList from "./chatmessagelist";

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(
        `https://qa.corider.in/assignment/chat?page=${page}`
      );
      setMessages((prevMessages) => [...prevMessages, ...response.data]);
      setPage(page + 1);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const handleScroll = ({ nativeEvent }) => {
    const { layoutMeasurement, contentOffset, contentSize } = nativeEvent;
    const isScrolledToTop = contentOffset.y <= 0;

    if (isScrolledToTop) {
      fetchMessages();
    }
  };

  return (
    <View>
      <ChatHeader />
      <ChatMessageList messages={messages} onScroll={handleScroll} />
    </View>
  );
};

export default ChatScreen;
