import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Image,
  HStack,
  VStack,
  Text,
  Link,
  Divider,
  Icon,
  IconButton,
  useColorModeValue,
  Pressable,
  Hidden,
  Center,
  StatusBar,
  Box,
  Stack,
  Heading,
  FormControl,
  Input,
  NativeBaseProvider,
  View,
} from "native-base";
import { AntDesign, Entypo } from "@expo/vector-icons";

import NavOptions from "../components/NavOptions";
import Map from "../components/Map";

import { SafeAreaView, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="#000" barStyle="light-content" />
      <Map />
      <Box safeArea flex={1} mx={3}>
        <Image
          height={20}
          width={80}
          alt="My Pool Ride"
          resizeMode={"contain"}
          source={require("../components/carpool-logo.png")}
        />
        <Center>
          <Text fontFamily="body" fontWeight={900} fontSize={23}>
            My Pool Ride
          </Text>
        </Center>
        <NavOptions />
        {/* <Footer /> */}
      </Box>
    </>
  );
};

export default HomeScreen;
