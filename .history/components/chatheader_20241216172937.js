import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const ChatHeader = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Feather name="chevron-left" size={24} color="#333" />
      </TouchableOpacity>
      <View style={styles.headerDetails}>
        <Text style={styles.title}>Trip 1</Text>
        <View style={styles.subtitle}>
          <Text style={styles.subtitleText}>
            From <Text style={styles.subtitleBold}>IGI Airport, T3</Text>
          </Text>
          <Text style={styles.subtitleText}>
            To <Text style={styles.subtitleBold}>Sector 28</Text>
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.moreButton}>
        <Feather name="more-vertical" size={24} color="#333" />
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
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  backButton: {
    padding: 8,
  },
  headerDetails: {
    flex: 1,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  subtitleText: {
    fontSize: 14,
    color: "#666",
    marginRight: 4,
  },
  subtitleBold: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  moreButton: {
    padding: 8,
  },
});

export default ChatHeader;
