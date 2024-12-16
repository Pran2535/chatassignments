import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const ChatHeader = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Feather name="chevron-left" size={28} color="#000" />
      </TouchableOpacity>
      <View style={styles.headerDetails}>
        <Text style={styles.title}>Trip 1</Text>
        <Text style={styles.subTitle}>
          From <Text style={styles.bold}>IGI Airport, T3</Text> To{" "}
          <Text style={styles.bold}>Sector 28</Text>
        </Text>
      </View>
      <TouchableOpacity>
        <Feather name="more-vertical" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    // Cross-platform shadow
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
      },
      android: {
        elevation: 5, // Shadow for Android
      },
    }),
  },
  headerDetails: {
    flex: 1,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  subTitle: {
    fontSize: 12,
    color: "#666",
  },
  bold: {
    fontWeight: "bold",
    color: "#000",
  },
});

export default ChatHeader;
