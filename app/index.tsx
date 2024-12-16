import React from "react";
import ChatScreen from "../components/chatscreen";
// import ChatScreen from "../components/chatscreen";


import { SafeAreaView } from "react-native";
// import ChatScreen from "./chatscreen";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ChatScreen />
    </SafeAreaView>
  );
}

