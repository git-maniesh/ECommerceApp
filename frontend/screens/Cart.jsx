import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { defaultStyle, colors } from "../styles/style";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { Button } from "react-native-paper";
import CartItem from "../components/CartItem";
import { useNavigation } from "@react-navigation/native";

export const cartItems = [
  {
    name: "Maccbook",
    image: "https://i.pinimg.com/originals",
    product: "narenderrer",
    stock: 4,
    price: 9999,
    quantity: 2,
  },
  {
    name: "Maccbook qq",
    image: "https://i.pinimg.com/originals",
    product: "narenaaaqderrer",
    stock: 4,
    price: 9999,
    quantity: 2,
  },
  {
    name: "Maccbookee33sfss",
    image: "https://i.pinimg.com/originals",
    product: "narendewwwrrer",
    stock: 4,
    price: 9999,
    quantity: 2,
  },
  {
    name: "Maccbook5151",
    image: "https://i.pinimg.com/originals",
    product: "narendersfsarer",
    stock: 4,
    price: 9999,
    quantity: 2,
  },
  {
    name: "Maccbookfsf",
    image: "https://i.pinimg.com/originals",
    product: "narendaaderrer",
    stock: 4,
    price: 9999,
    quantity: 2,
  },
  {
    name: "Shoes",
    image: "https://i.pinimg.com/originals",
    product: "narenderrerShows",
    stock: 4,
    price: 9999,
    quantity: 3,
  },
];
const Cart = () => {
  const navigate = useNavigation();
  const incrementHandler = ({ id, qty, stock }) => {
    console.log("increasing ", id, qty, stock);
  };
  const decrementHandler = ({ id, qty }) => {
    console.log("Decreasing ", id, qty);
  };
  return (
    <View
      style={{
        ...defaultStyle,
        padding: 0,
      }}
    >
      {/* header */}
      <Header emptyCart={true} back={true} />
      {/* heading */}
      <Heading
        text1="Shopping"
        text2="Cart"
        containerStyle={{ paddingTop: 70, marginLeft: 35 }}
      />

      <View
        style={{
          paddingVertical: 10,
          flex: 1,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {cartItems.map((i, index) => (
            <CartItem
              navigate={navigate}
              key={i.product}
              id={i.product}
              name={i.name}
              stock={i.stock}
              amount={i.price}
              imgSrc={i.image}
              index={index}
              qty={i.quantity}
              incrementHandler={incrementHandler}
              decrementHandler={decrementHandler}
            />
          ))}
        </ScrollView>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 25,
        }}
      >
        <Text> 4 items</Text>
        <Text> ₹ 4 </Text>
      </View>
      <TouchableOpacity
        onPress={
          cartItems.length > 0 ? () => navigate.navigate("confirmorder") : null
        }
      >
        <Button
        title="Checkout"
          style={{
            backgroundColor: colors.color3,
            borderRadius: 100,
            padding: 5,
            margin: 30,
          }}
          icon={"cart"}
          textColor={colors.color2}
          
        >
          Checkout
        </Button>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
