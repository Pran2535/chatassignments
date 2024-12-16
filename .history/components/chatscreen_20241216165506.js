import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import axios from "axios";
import ChatHeader from "./chatheader";
import ChatMessageList from "./chatmessagelist";
import InputBox from "./inputbox";

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(
        "https://qa.corider.in/assignment/chat?page=0"
      );

      const formattedMessages = response.data.chats.map((msg, index) => ({
        id: index,
        text: msg.message,
        isUser: Math.random() > 0.5, // Simulate user vs others
      }));
      setMessages(formattedMessages);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  return (
    <View style={styles.container}>
      <ChatHeader />
      <ChatMessageList messages={messages} />
      <InputBox />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default ChatScreen;
