import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
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
import { useIsFocused } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useMessageAndErrorOther, useSetCategories } from "../../utils/hooks";
import { getProductDetails } from "../../redux/actions/productAction";
import { updateProduct } from "../../redux/actions/otherAction";

const UpdateProduct = ({ navigation, route }) => {
  const [visible, setVisible] = useState(false);

  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  // console.log(route.params);

  const { product, loading } = useSelector((state) => state.product);

  const [id] = useState(route.params.id);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [categoryID, setCategoryID] = useState("");
  const [categories, setCategories] = useState([]);

  useSetCategories(setCategories, isFocused);

  const submitHandler = () => {
    // console.log(name, description, price, stock, categoryID);
    dispatch(updateProduct(id, name, description, price, stock, categoryID));
  };
  const loading_other = useMessageAndErrorOther(
    dispatch,
    navigation,
    "adminpanel"
  );
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id, isFocused]);

  useEffect(() => {
    if (product) {
      setName(product.name);
      setDescription(product.description);
      setPrice(String(product.price));
      setStock(String(product.stock));
      setCategory(product.category?.category);
      setCategoryID(product.category?._id);
    }
  }, [product]);
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
                  navigation.navigate("productimages", {
                    id,
                    images: product.images,
                  })
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
