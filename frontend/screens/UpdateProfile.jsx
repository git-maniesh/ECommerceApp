import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import {
  colors,
  defaultImg,
  defaultStyle,
  formHeading,
  formStyles,
  inputOptions,
} from "../styles/style";
import { Button, TextInput } from "react-native-paper";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../redux/actions/otherAction";
import { useMessageAndErrorOther } from "../utils/hooks";

const UpdateProfile = ({ navigation }) => {
  // const disableBtn = name || email || address || city || country || pinCode;

  const { user } = useSelector((state) => state.user);

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [address, setAddress] = useState(user?.address);
  const [city, setCity] = useState(user?.city);
  const [country, setCountry] = useState(user?.country);
  const [pinCode, setPinCode] = useState(user?.pinCode.toString());
  const dispatch = useDispatch();
  const submitHandler = () => {
    dispatch(updateProfile(name, email, address, city, country, pinCode));
  };
  const loading = useMessageAndErrorOther(dispatch, navigation, "profile");
  return (
    <>
      <View style={defaultStyle}>
        <Header back={true} />
        {/* heading */}
        <View style={{ marginBottom: 20, paddingTop: 70 }}>
          <Text style={formHeading}>Edit Profile </Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            padding: 20,
            elevation: 10,
            borderRadius: 10,
            backgroundColor: colors.color3,
          }}
        >
          <View>
            <TextInput
              {...inputOptions}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              {...inputOptions}
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              {...inputOptions}
              placeholder="Address"
              value={address}
              onChangeText={setAddress}
            />
            <TextInput
              {...inputOptions}
              placeholder="City"
              value={city}
              onChangeText={setCity}
            />
            <TextInput
              {...inputOptions}
              placeholder="Country"
              value={country}
              onChangeText={setCountry}
            />
            <TextInput
              {...inputOptions}
              placeholder="PinCode"
              keyboardType="number-pad"
              value={pinCode}
              onChangeText={setPinCode}
            />

            <Button
              loading={loading}
              textColor={colors.color2}
              // disabled={disableBtn}
              style={formStyles.btn}
              onPress={submitHandler}
            >
              Update Details
            </Button>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default UpdateProfile;
