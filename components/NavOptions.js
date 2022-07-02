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
import { Box } from "native-base";
// import { TouchableOpacity } from "react-native-web";

const data = [
  {
    id: "123",
    title: "Find a ride",
    image:
      "https://i.insider.com/5d3f6002100a24496210927d?width=1136&format=jpeg",
    screen: "FindRideScreen",
  },
  {
    id: "456",
    title: "Offer ride",
    image:
      "https://cdn1.vectorstock.com/i/1000x1000/33/35/order-food-online-vector-16673335.jpg",
    screen: "OfferRideScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();

  return (
    <Box safeArea>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
            <View>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: "contain",
                }}
                source={{
                  uri: item.image,
                }}
              />
              <Text>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </Box>
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
