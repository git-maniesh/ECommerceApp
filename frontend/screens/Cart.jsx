import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { defaultStyle, colors } from "../styles/style";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { Button } from "react-native-paper";
import CartItem from "../components/CartItem";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { Toast } from "react-native-toast-message/lib/src/Toast";

// export const cartItems = [
//   {
//     name: "Maccbook",
//     image: "https://i.pinimg.com/originals",
//     product: "narenderrer",
//     stock: 4,
//     price: 9999,
//     quantity: 2,
//   },
// ]
const Cart = () => {
  const navigate = useNavigation();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const incrementHandler = (id, name, price, image, stock, quantity) => {
    const newQty = quantity + 1;
    if (stock <= quantity)
      return Toast.show({
        type: "error",
        text1: "Maximum Value Added",
      });

    dispatch({
      type: "addToCart",
      payload: {
        product: id,
        name,
        price,
        image,
        stock,
        quantity: newQty,
      },
    });

    // quantity += 1;
    // console.log(quantity);
  };
  const decrementHandler = (id, name, price, image, stock, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) return dispatch({ type: "removeFromCart", payload: id });
    dispatch({
      type: "addToCart",
      payload: {
        product: id,
        name,
        price,
        image,
        stock,
        quantity: newQty,
      },
    });
    // console.log(quantity);
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
          {cartItems.length > 0 ? (
            cartItems.map((i, index) => (
              <CartItem
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
                navigate={navigate}
              />
            ))
          ) : (
            <Text
              style={{
                textAlign: "center",
                fontSize: 18,
              }}
            >
              No Items Added
            </Text>
          )}
        </ScrollView>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 35,
        }}
      >
        <Text> {cartItems.length} items</Text>
        <Text>
          {" "}
          ₹{" "}
          {cartItems.reduce(
            (prev, curr) => prev + curr.quantity * curr.price,
            0
          )}{" "}
        </Text>
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
