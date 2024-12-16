import React, { useState, useRef } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  Animated,
} from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";

const InputBox = ({ placeholder = "Reply to @Rohit Yadav", onSendMessage }) => {
  const [message, setMessage] = useState("");
  const [showIcons, setShowIcons] = useState(false);
  const iconsAnimValue = useRef(new Animated.Value(0)).current;

  // Animate icons sliding in/out
  const animateIcons = (toValue) => {
    Animated.timing(iconsAnimValue, {
      toValue,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const handleFocus = () => {
    setShowIcons(true);
    animateIcons(1);
  };

  const handleBlur = () => {
    setShowIcons(false);
    animateIcons(0);
  };

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage?.(message);
      setMessage("");
      Keyboard.dismiss();
    }
  };

  const renderExtraIcons = () => {
    const icons = [
      { name: "camera", icon: "camera", component: Feather },
      { name: "mic", icon: "mic", component: Feather },
      { name: "file", icon: "insert-drive-file", component: MaterialIcons },
    ];

    return (
      <Animated.View
        style={[
          styles.extraIcons,
          {
            opacity: iconsAnimValue,
            transform: [
              {
                translateY: iconsAnimValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-20, 0],
                }),
              },
            ],
          },
        ]}
      >
        {icons.map((item) => (
          <TouchableOpacity
            key={item.name}
            style={styles.iconButton}
            accessibilityLabel={`Open ${item.name}`}
            accessibilityHint="Tap to activate additional input options"
          >
            <item.component name={item.icon} size={24} color="#fff" />
          </TouchableOpacity>
        ))}
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconButton}
        accessibilityLabel="Open emoji selector"
      >
        <Feather name="smile" size={24} color="#666" />
      </TouchableOpacity>

      <TextInput
        value={message}
        onChangeText={setMessage}
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor="#999"
        multiline={true}
        numberOfLines={4}
        onFocus={handleFocus}
        onBlur={handleBlur}
        accessibilityLabel="Message input"
        textAlignVertical="center"
        returnKeyType="send"
        blurOnSubmit={true}
        onSubmitEditing={handleSend}
      />

      {showIcons && renderExtraIcons()}

      <TouchableOpacity
        style={styles.iconButton}
        onPress={handleSend}
        disabled={!message.trim()}
        accessibilityLabel="Send message"
      >
        <Feather
          name="send"
          size={24}
          color={message.trim() ? "#4CAF50" : "#666"}
        />
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
    position: "relative",
  },
  input: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    borderRadius: 25,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginHorizontal: 8,
    color: "#333",
    maxHeight: 100, // Limit input height
  },
  iconButton: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  extraIcons: {
    position: "absolute",
    right: 50,
    top: -40,
    flexDirection: "row",
    backgroundColor: "#4CAF50",
    borderRadius: 8,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default InputBox;
