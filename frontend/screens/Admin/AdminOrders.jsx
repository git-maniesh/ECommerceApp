import { View, Text, ScrollView } from "react-native";
import React from "react";
import { colors, defaultStyle, formHeading } from "../../styles/style";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import OrderItems from "../../components/OrderItems";
import { useGetOrders, useMessageAndErrorOther } from "../../utils/hooks";
import { useIsFocused } from "@react-navigation/native";
import { Headline } from "react-native-paper";
import { useDispatch } from "react-redux";
import { processOrder } from "../../redux/actions/otherAction";

const AdminOrders = ({ navigation }) => {
  // const loading = false;
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const { loading, orders } = useGetOrders(useIsFocused, true);

  const updateHandler = (id) => {
    // console.log("processing");
    // console.log(id);
    dispatch(processOrder(id));
  };
  const processOrderLoading = useMessageAndErrorOther(
    dispatch,
    navigation,
    "adminpanel"
  );
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
        <Text style={formHeading}>All Orders </Text>
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
                  admin={true}
                  updateHandler={updateHandler}
                  loading={processOrderLoading}
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

export default AdminOrders;
