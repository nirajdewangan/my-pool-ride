import React, { Component } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { Box, Center, HStack } from "native-base";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";
// import { TouchableOpacity } from "react-native-web";
import tw from "twrnc";
import { Icon } from "@rneui/themed";

const data = [
  {
    id: "123",
    title: "Find A Ride",
    image:
      "https://i.insider.com/5d3f6002100a24496210927d?width=1136&format=jpeg",
    screen: "FindRideScreen",
  },
  {
    id: "456",
    title: "Offer A Ride",
    image:
      "https://cdn1.vectorstock.com/i/1000x1000/33/35/order-food-online-vector-16673335.jpg",
    screen: "OfferRideScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  return (
    <Box safeArea>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}
            disabled={!origin}
            style={{ paddingLeft: 30 }}
          >
            <View>
              <Icon
                name={item.title === "Find A Ride" ? `taxi` : `reddit-alien`}
                type={
                  item.title === "Find A Ride" ? `font-awesome` : `font-awesome`
                }
                color={item.title === "Find A Ride" ? `#13BB9A` : `#324959`}
                style={tw`p-2   mt-4 `}
                size={80}
              />

              <Text style={{ textAlign: "center" }}>{item.title}</Text>
              <Icon
                type="antdesign"
                color="white"
                name="arrowright"
                style={tw`p-2 bg-black rounded-full w-10 m-auto mt-4 `}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </Box>
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
