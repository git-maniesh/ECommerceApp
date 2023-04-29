import { View, Text, Dimensions } from "react-native";
import React from "react";
import { PieChart } from "react-native-chart-kit";
import { colors } from "../styles/style";

const Chart = ({ inStock = 0, outOfStock = 0 }) => {
    const screenWidth = Dimensions.get("screen").width-60-75;
  const chartConfig = {
    color: (opacity = 1) => `rgba(26,255,16,${opacity})`,
    // color:colors.color1_light
  };
  const data = [
    {
      name: "Out Of Stock",
      population: outOfStock,
      color: colors.color1_light,
      legendFontColor: colors.color2,
    },
    {
      name: "In Stock",
      population: inStock,
      color: colors.color1_light2,
      legendFontColor: colors.color2,
    },
  ];
  return (
    <View>
      <PieChart 
        data={data}
        width={screenWidth}
        height={150}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={colors.color3}
        // paddingLeft="15"
        // center={[10, 50]}
        absolute
      />
    </View>
  );
};

export default Chart;
