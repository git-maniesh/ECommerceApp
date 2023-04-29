import React from "react";
import { TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import { colors } from "../styles/style";
import { useNavigation, useRoute } from "@react-navigation/native";

const Header = ({back,emptyCart=false}) => {
  const navigate = useNavigation();
  const emptyCartHandler = () =>{
    console.log("EMpty cart");
  }
  const route = useRoute()
  return (
    <>
      {back && (
        <TouchableOpacity
            style={{
              position: "absolute",
              left: 20,
              top: 40,
              zIndex: 10,
            }}
            onPress={() => navigate.goBack()}
        >
          <Avatar.Icon
            style={{
              backgroundColor: colors.color4,
            }}
            icon={ "arrow-left" }
            color ={ route.name==="productdetails"?colors.color2 :  colors.color3}
          />
        </TouchableOpacity>
      )}

      <TouchableOpacity
            style={{
                position:"absolute", //>this gives the cart disappearance
                right :20,//also this must be the right :20
                top:40,
                zIndex:10,
            }}
            onPress={emptyCart ? emptyCartHandler : ()=> navigate.navigate("cart")}
      >
        <Avatar.Icon 
            style={{
                backgroundColor:colors.color4,
            }}
            icon = {emptyCart ? "delete-outline": "cart-outline"}
            color ={ route.name==="productdetails"?colors.color2 :  colors.color3}
        />


      </TouchableOpacity>

    </>
  );
};

export default Header;
