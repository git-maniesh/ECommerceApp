import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../styles/style";
import { Avatar, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const MyModal = ({ id, deleteHandler,  setOpenModal }) => {
    const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          position: "absolute",
          top: 10,
          right: 10,
        }}
        onPress={() => setOpenModal(false)}
      >
        <Avatar.Icon
          icon={"close"}
          size={25}
          style={{
            backgroundColor: colors.color1,
          }}
        />
      </TouchableOpacity>
      <Text
        style={styles.text}
        onPress={() => navigate.navigate("updateproduct", { id })}
      >
        Edit
      </Text>

      <Button  title="Delete"  textColor={colors.color1} onPress={() => deleteHandler(id)}>
        Delete
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation:10,
    width: 200,
    height: 100,
    alignSelf: "center",
    justifyContent: "center",
    zIndex: 100,
    backgroundColor: colors.color2,
    padding: 20,
    borderRadius: 10,
  },
  text: {
    fontWeight: "900",
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default MyModal;
