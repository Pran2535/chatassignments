import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import axios from "axios";
import ChatMessageList from "./ChatMessageList";
import { Feather } from "@expo/vector-icons";

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
    const { contentOffset, layoutMeasurement, contentSize } = nativeEvent;
    const isScrolledToTop = contentOffset.y <= 0;
    if (isScrolledToTop) fetchMessages();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ChatHeader />
      <ChatMessageList messages={messages} onScroll={handleScroll} />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Reply to @Rohit Yadav"
          placeholderTextColor="#A0A0A0"
          style={styles.input}
        />
        <View style={styles.iconsContainer}>
          <Feather name="smile" size={24} color="#00D100" style={styles.icon} />
          <Feather
            name="camera"
            size={24}
            color="#00D100"
            style={styles.icon}
          />
          <Feather name="mic" size={24} color="#00D100" style={styles.icon} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderTopWidth: 1,
    borderColor: "#E0E0E0",
  },
  input: {
    flex: 1,
    backgroundColor: "#F2F3F5",
    borderRadius: 24,
    paddingHorizontal: 12,
    height: 40,
    color: "#333",
  },
  iconsContainer: {
    flexDirection: "row",
    marginLeft: 8,
  },
  icon: {
    marginLeft: 8,
  },
});

export default ChatScreen;
