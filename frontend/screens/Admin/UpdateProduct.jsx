import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header";
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
  inputStyling,
} from "../../styles/style";
import Loader from "../../components/Loader";
import { Button, TextInput } from "react-native-paper";
import SelectComponents from "../../components/SelectComponents";

const UpdateProduct = ({ navigation, route }) => {
  const loading = false;
  const loading_other = false;
  console.log(route.params);

  const images = [
    {
      url:"https://i.pinimg.com/originals",
      _id:"narenderImageSmanage"
    },
    {
      url:"https://i.pinimg.com/originals",
      _id:"narenderImageSmanagdde"
    },
    {
      url:"https://i.pinimg.com/originals",
      _id:"narenderImageSmanageee"
    },
  ]
  const [id] = useState(route.params.id);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("Laptop");
  const [categoryID, setCategoryID] = useState("");
  const [categories, setCategories] = useState([
    { _id: "narenderr", category: "Laptop" },
    { _id: "narender12r", category: "LaptopHP" },
    { _id: "narender1211r", category: "LaptopDELL" },
    { _id: "narender12110r", category: "LaptopACER" },
  ]);
  const [visible, setVisible] = useState(false);
  const submitHandler = () => {
    console.log(name, description, price, stock, categoryID);
  };
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
          <Text style={formHeading}>Update Product </Text>
        </View>

        {loading ? (
          <Loader />
        ) : (
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
              <Button
                onPress={() =>
                  navigation.navigate("productimages", { id, images })
                }
                textColor={colors.color1}
                // color={colors.color1}
                title="Manage Images"
              >
                Manage Images
              </Button>
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
                placeholder="Stock"
                keyboardType="number-pad"
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
                loading={loading_other}
                disabled={loading_other}
              >
                <Text>Update </Text>
              </Button>
            </View>
          </ScrollView>
        )}
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

export default UpdateProduct;
