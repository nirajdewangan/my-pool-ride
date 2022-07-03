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

// import { SafeAreaView, StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
//TODO: implement the key in .env file
// import { GOOGLE_MAPS_APIKEYS } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

// import Footer from "../components/Footer";

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <>
      <StatusBar translucent backgroundColor="#000" barStyle="light-content" />

      <Box safeArea flex={1} mx={3}>
        <Image
          height={20}
          width={80}
          alt="My Pool Ride"
          resizeMode={"contain"}
          source={require("../components/carpool-logo.png")}
        />
        <Center mb={5}>
          <Text fontFamily="body" fontWeight={900} fontSize={23}>
            My Pool Ride
          </Text>
        </Center>
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          returnKeyType={"search"}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
            console.log(data, details);
          }}
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          minLength={2}
          fetchDetails={true}
          enablePoweredByContainer={false}
          query={{
            key: "AIzaSyCj7BpyefcFJGLVIF_jdvOtwrGBNgI2owI",
            language: "en",
          }}
        />
        <NavOptions />
        {/* <Footer /> */}
      </Box>
    </>
  );
};

export default HomeScreen;
