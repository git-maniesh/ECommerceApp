import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../styles/style";
import { Button } from "react-native-paper";

const OrderItems = ({
  id,
  price,
  address,
  orderedOn,
  status,
  paymentMethod,
  updateHandler,
  admin = false,
  loading,
  i = 0,
}) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: i % 2 === 0 ? colors.color2 : colors.color3,
      }}
    >
      <Text
        style={{
          ...styles.text,
          backgroundColor: i % 2 === 0 ? colors.color3 : colors.color1,
        }}
      >
        ID - #{id}
      </Text>
      <TextBox title={"Address"} value={address} i ={i} />
      <TextBox title={"Ordered On"} value={orderedOn} i ={i} />
      <TextBox title={"Price"} value={price} i ={i} />
      <TextBox title={"Status"} value={status} i ={i} />
      <TextBox title={"Payment Method"} value={paymentMethod} i ={i} />
      {
        admin && <Button
        icon={"update"}
        mode={"contained"}
        style={{
            // width:120,
            backgroundColor:i % 2=== 0 ?colors.color3:colors.color2,
            alignSelf:"center",
            marginTop:10,
        }}
        onPress={()=>updateHandler(id)}
        loading ={loading}
        disabled ={loading}
        textColor={i % 2 ===  0 ? colors.color2:colors.color3 } > Update </Button>
      }
    </View>
  );
};
const TextBox = ({ title, value, i }) => (
  <Text
    style={{
      marginVertical: 6,
      color: i % 2 === 0 ? colors.color3 : colors.color2,
    }}
  >
    <Text
      style={{
        fontWeight: "900",
      }}
    >
      {title} -
    </Text>
    {title === "Price"?" ₹":""}
    {value}
  </Text>
);
const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 5,
  },
  text: {
    color: colors.color2,
    fontSize: 16,
    fontWeight: "900",
    marginHorizontal: -2,
    marginTop: -20,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});

export default OrderItems;
