import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const ChatHeader = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  const handleDropdownOption = (option) => {
    // Implement your logic for handling the selected option
    console.log(`Handling ${option} option`);
    setShowDropdown(false);
  };

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
      <TouchableOpacity style={styles.moreButton} onPress={toggleDropdown}>
        <Feather name="more-vertical" size={24} color="#333" />
      </TouchableOpacity>
      {showDropdown && (
        <TouchableWithoutFeedback onPress={toggleDropdown}>
          <View style={styles.dropdownContainer}>
            <View style={styles.dropdownMenu}>
              <TouchableOpacity
                style={styles.dropdownOption}
                onPress={() => handleDropdownOption("Members")}
              >
                <Text style={styles.dropdownOptionText}>Members</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.dropdownOption}
                onPress={() => handleDropdownOption("Share Number")}
              >
                <Text style={styles.dropdownOptionText}>Share Number</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.dropdownOption}
                onPress={() => handleDropdownOption("Report")}
              >
                <Text style={styles.dropdownOptionText}>Report</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      )}
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
    position: "relative",
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
  dropdownContainer: {
    position: "absolute",
    top: 50,
    right: 16,
    width: Dimensions.get("window").width * 0.4,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  dropdownMenu: {
    paddingVertical: 8,
  },
  dropdownOption: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  dropdownOptionText: {
    fontSize: 16,
    color: "#333",
  },
});

export default ChatHeader;
