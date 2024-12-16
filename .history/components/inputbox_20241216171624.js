import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";

const InputBox = () => {
  const [showIcons, setShowIcons] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconButton}>
        <Feather name="smile" size={24} color="#666" />
      </TouchableOpacity>

      <TextInput
        placeholder="Reply to @Rohit Yadav"
        style={styles.input}
        placeholderTextColor="#999"
        onFocus={() => setShowIcons(true)} // Show icons on focus
        onBlur={() => setShowIcons(false)} // Hide icons on blur
      />

      {showIcons && (
        <View style={styles.extraIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Feather name="camera" size={24} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Feather name="mic" size={24} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <MaterialIcons name="insert-drive-file" size={24} color="#666" />
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity style={styles.iconButton}>
        <Feather name="send" size={24} color="#666" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    borderRadius: 25,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginHorizontal: 8,
    color: "#333",
  },
  iconButton: {
    padding: 8,
  },
  extraIcons: {
    flexDirection: "row",
    position: "absolute",
    right: 50,
    top: -40,
    backgroundColor: "#4CAF50", // Green background for icons
    borderRadius: 8,
    padding: 5,
  },
});

export default InputBox;
