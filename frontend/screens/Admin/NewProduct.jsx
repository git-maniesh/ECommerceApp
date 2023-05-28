import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useDebugValue, useEffect, useState } from "react";
import Header from "../../components/Header";
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
  inputStyling,
} from "../../styles/style";
import Loader from "../../components/Loader";
import { Avatar, Button, TextInput } from "react-native-paper";
import SelectComponents from "../../components/SelectComponents";
import { useMessageAndErrorOther, useSetCategories } from "../../utils/hooks";
import { useIsFocused } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import mime from "mime";
import { createProduct } from "../../redux/actions/otherAction";

const NewProduct = ({ navigation, route }) => {
  const [visible, setVisible] = useState(false);
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  // console.log(route.params);

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("Choose Category");
  const [categoryID, setCategoryID] = useState(undefined);
  const [categories, setCategories] = useState([]);

  useSetCategories(setCategories, isFocused);

  const disableBtnCondition =
    !name || !description || !price || !stock || !image;

  const submitHandler = () => {
    // console.log(name, description, price, stock, categoryID);
    const myForm = new FormData();
    myForm.append("name", name);
    myForm.append("description", description);
    myForm.append("price", price);
    myForm.append("stock", stock);
    myForm.append("file", {
      uri: image,
      type: mime.getType(image),
      name: image.split("/").pop(),
    });
    if (categoryID) myForm.append("category", categoryID);
    dispatch(createProduct(myForm));
  };
  const loading = useMessageAndErrorOther(dispatch, navigation, "adminpanel");

  useEffect(() => {
    if (route.params?.image) setImage(route.params.image);
  }, [route.params]);

  return (
    <>
      <View
        style={{
          ...defaultStyle,
          backgroundColor: colors.color5,
        }}
      >
        <Header back={true} />
        {/* heading */}
        <View style={{ marginBottom: 20, paddingTop: 70 }}>
          <Text style={formHeading}>New Product </Text>
        </View>

        <ScrollView
          style={{
            padding: 20,
            elevation: 10,
            borderRadius: 10,
            backgroundColor: colors.color3,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              height: 650,
            }}
          >
            <View
              style={{
                width: 80,
                height: 80,
                alignSelf: "center",
                marginBottom: 20,
              }}
            >
              <Avatar.Image
                size={80}
                style={{ backgroundColor: colors.color1 }}
                source={{
                  uri: image ? image : null,
                }}
              />
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("camera", { newProduct: true })
                }
              >
                <Avatar.Icon
                  icon={"camera"}
                  size={30}
                  color={colors.color3}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    backgroundColor: colors.color2,
                    right: -5,
                  }}
                />
              </TouchableOpacity>
            </View>

            <TextInput
              {...inputOptions}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              {...inputOptions}
              placeholder="Description"
              value={description}
              onChangeText={setDescription}
            />
            <TextInput
              {...inputOptions}
              placeholder="Price"
              keyboardType="number-pad"
              value={price}
              onChangeText={setPrice}
            />
            <TextInput
              {...inputOptions}
              keyboardType="number-pad"
              placeholder="Stock"
              value={stock}
              onChangeText={setStock}
            />
            <Text
              style={{
                ...inputStyling,
                textAlign: "center",
                borderRadius: 3,
                textAlignVertical: "center",
              }}
              onPress={() => setVisible(true)}
            >
              {category}
            </Text>

            <Button
              style={{
                backgroundColor: colors.color1,

                padding: 6,
                margin: 30,
                borderRadius: 20,
              }}
              textColor={colors.color2}
              title="Update"
              onPress={submitHandler}
              loading={loading}
              disabled={disableBtnCondition || loading}
            >
              <Text>Create </Text>
            </Button>
          </View>
        </ScrollView>
      </View>
      <SelectComponents
        visible={visible}
        setCategory={setCategory}
        setCategoryID={setCategoryID}
        categories={categories}
        setVisible={setVisible}
      />
    </>
  );
};

export default NewProduct;
