import { View, Text, ScrollView } from "react-native";
import React from "react";
import { colors, defaultStyle, formHeading } from "../styles/style";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { Headline } from "react-native-paper";
import OrderItems from "../components/OrderItems";

export const orders = [
  {
    _id: "mamsni",
    shippingInfo: {
      address: "Madhuban Colony",
      city: "Hyderabad",
      country: "India",
      pincode: 500077,
    },
    createdAt: "08-04-2023T2346",
    orderStatus: "Processing",
    paymentMethod: "COD",
    totalAmount: "20000",
  },
  {
    _id: "mamsnif55",
    shippingInfo: {
      address: "Madhuban Colony",
      city: "Hyderabad",
      country: "India",
      pincode: 500077,
    },
    createdAt: "08-04-2023T2346",
    orderStatus: "Processing",
    paymentMethod: "COD",
    totalAmount: "20000",
  },
  {
    _id: "mamsni2256",
    shippingInfo: {
      address: "Madhuban Colony",
      city: "Hyderabad",
      country: "India",
      pincode: 500077,
    },
    createdAt: "08-04-2023T2346",
    orderStatus: "Processing",
    paymentMethod: "COD",
    totalAmount: "20000",
  },
  {
    _id: "mamsni22",
    shippingInfo: {
      address: "Madhuban Colony",
      city: "Hyderabad",
      country: "India",
      pincode: 500077,
    },
    createdAt: "08-04-2023T2346",
    orderStatus: "Processing",
    paymentMethod: "oNLINE",
    totalAmount: "200001",
  },
];
const Orders = () => {
  const loading = false;

  return (
    <View
      style={{
        ...defaultStyle,
        backgroundColor: colors.color5,
      }}
    >
      <Header back={true} />
      {/* heading */}
      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}>My Orders </Text>
      </View>
      {loading ? (
        <Loader />
      ) : (
        <View style={{ padding: 10, flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {orders.length > 0 ? (
              orders.map((item, index) => (
                <OrderItems 
                key={item._id} 
                id={item._id}
                i={index} 
                price={item.totalAmount}
                status={item.orderStatus}
                paymentMethod={item.paymentMethod}
                orderedOn={item.createdAt.split("T")[0]}
                address={`${item.shippingInfo.address},${item.shippingInfo.city},${item.shippingInfo.country} ${item.shippingInfo.pincode}`}
                // admin={true}
                // loading={ true}
                
                />
              ))
            ) : (
              <Headline style={{ textAlign: "center" }}>
                No Orders Yet!
              </Headline>
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default Orders;
