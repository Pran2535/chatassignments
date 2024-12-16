import React, { useState, useEffect } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
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
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ChatHeader />
        <View style={styles.chatBox}>
          <ChatMessageList messages={messages} />
        </View>
        <InputBox />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F3F7FA", // Subtle light background color
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden", // Prevent shadow leaks
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 5,
    elevation: 10, // Shadow for Android
  },
  chatBox: {
    flex: 1,
    backgroundColor: "#F9FAFC", // Light grayish-blue
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default ChatScreen;
