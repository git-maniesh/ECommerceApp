import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle } from "../styles/style";
import Header from "../components/Header";
import { Avatar, Button } from "react-native-paper";
import SearchModel from "../components/SearchModel";
import ProductCard from "../components/ProductCard";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";
import Heading from "../components/Heading";

const categories = [
  { category: "Nice", _id: "niceee" },
  { category: "Man", _id: "Mannn" },
  { category: "womann", _id: "niwomann" },
  { category: "woman1n", _id: "niw2omann" },
  { category: "woma1n1n", _id: "niw22omann" },
  { category: "woman2n", _id: "niw1omann" },
  { category: "Narender", _id: "helo" },
];
export const products = [
  {
    price: 9999,
    name: "Sample",
    stock: 25,
    _id: "narender",
    category: "IDK",
    images: [
      {
        url: "https://i.pinimg.com/originals",
      },
    ],
  },
  {
    price: 9999,
    name: "Sample",
    stock: 25,
    _id: "narender0007",
    category: "IDK",
    images: [
      {
        url: "https://i.pinimg.com/originals",
      },
    ],
  },
  {
    price: 9999,
    name: "Sample11",
    stock: 25,
    _id: "narenderaf",
    category: "FURNITURES",
    images: [
      {
        url: "https://i.pinimg.com/originals",
      },
    ],
  },
  {
    price: 9999,
    name: "Sample11",
    stock: 25,
    _id: "narendera22f",
    category: "furnituress1",
    images: [
      {
        url: "https://i.pinimg.com/originals",
      },
    ],
  },
  {
    price: 9999,
    name: "Sample11",
    stock: 25,
    _id: "narenderasfs4f",
    category: "furnituress221",
    images: [
      {
        url: "https://i.pinimg.com/originals",
      },
    ],
  },
  {
    price: 9999,
    name: "Sample11",
    stock: 25,
    _id: "nareseesnderaf",
    category: "furnituress1",
    images: [
      {
        url: "https://i.pinimg.com/originals",
      },
    ],
  },
  {
    price: 9999,
    name: "Sample11",
    stock: 25,
    _id: "n5154arenderaf",
    category: "furnituress1",
    images: [
      {
        url: "https://i.pinimg.com/originals",
      },
    ],
  },
];
const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [category, setCategory] = useState("");
  const categoryButtonHandler = (id) => {
    // console.log(id);
    setCategory(id);
  };

  const addToCardHandler = (id) => {
    console.log("ADdig tocart ", id);
  };

  const navigate = useNavigation();
  return (
    <>
      {activeSearch && (
        <SearchModel
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setActiveSearch={setActiveSearch}
          products={products}
        />
      )}
      <View style={defaultStyle}>
        <Header />
        {/* Heading Row  */}
        <View
          style={{
            paddingTop: 70,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItem: "center",
          }}
        >
          {/* Heading  */}

          <Heading text1="Our" text2="Products" />
          {/* SearchBar  */}
          <View>
            <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
              <Avatar.Icon
                icon={"magnify"}
                color={"gray"}
                size={50}
                style={{
                  backgroundColor: colors.color2,
                  elevation: 12,
                  borderRadius: 20, //this gives the effect to the search icon
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* categories */}
        <View
          style={{
            flexDirection: "row",
            height: 80,
          }}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: "center",
            }}
          >
            {categories.map((item, index) => (
              <Button
                key={item._id}
                style={{
                  backgroundColor:
                    category === item._id ? colors.color1 : colors.color5,
                  borderRadius: 100,
                  margin: 5,
                }}
                onPress={() => categoryButtonHandler(item._id)}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: category === item._id ? "white" : "gray",
                  }}
                >
                  {item.category}
                </Text>
              </Button>
            ))}
          </ScrollView>
        </View>
        {/* products  */}
        <View
          style={{
            flex: 1,
          }}
        >
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products.map((item, index) => (
              <ProductCard
                stock={item.stock}
                name={item.name}
                price={item.price}
                image={item.images[0]?.url}
                id={item._id}
                addToCardHandler={addToCardHandler}
                key={item._id}
                i={index}
                navigate={navigate}
              />
            ))}
          </ScrollView>
        </View>
      </View>

      <Footer activeRoute={"home"} />
    </>
  );
};

export default Home;
