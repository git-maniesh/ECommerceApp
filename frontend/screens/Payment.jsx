import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { colors, defaultStyle } from "../styles/style";
import { Button, RadioButton } from "react-native-paper";

const Payment = ({ navigation, route }) => {
  const [paymentMethod, setPaymentMethod] = useState("COD");

  console.log(paymentMethod);
  const isAuthenticated = true;
  const redirectToLogin = () => {
    navigation.navigate("login");
  };
  const codHander = () => {};
  const onlineHandler = () => {};

  return (
    <View style={defaultStyle}>
      <Header back={true} />
      <Heading
        containerStyle={{
          paddingTop: 70,
        }}
        text1="Payment"
        text2="Method"
      />
      <View style={style.container}>
        <RadioButton.Group
          value={paymentMethod}
          onValueChange={setPaymentMethod}
        >
          <View style={style.radioStyle}>
            <Text style={style.radioStyleText}>CashOn Delivery</Text>
            <RadioButton color={colors.color1} value={"COD"} />
          </View>
          <View style={style.radioStyle}>
            <Text style={style.radioStyleText}>Online Payment</Text>
            <RadioButton color={colors.color1} value={"ONLINE"} />
          </View>
        </RadioButton.Group>
      </View>
      <View>
        <TouchableOpacity
          onPress={
            !isAuthenticated
              ? redirectToLogin
              : paymentMethod === "COD"
              ? codHander
              : onlineHandler
          }
        >
          <Button
            style={style.btn}
            textColor={colors.color2}
            icon={
              paymentMethod === "COD"
                ? "check-circle"
                : "circle-multiple-outline"
            }
          >
            {paymentMethod === "COD" ? "Place Order" : "Pay Now"}
          </Button>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    backgroundColor: colors.color3,
    padding: 30,
    borderRadius: 10,
    marginVertical: 20,
    flex: 1,
    justifyContent: "center",
  },
  radioStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  radioStyleText: {
    fontWeight: "600",
    fontSize: 18,
    textTransform: "uppercase",
    color: colors.color2,
  },
  btn: {
    backgroundColor: colors.color3,
    borderRadius: 100,
    margin: 10,
    padding: 5,
  },
});

export default Payment;
