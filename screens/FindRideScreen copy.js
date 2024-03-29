import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  View,
  Button,
  Spacer,
  Center,
  NativeBaseProvider,
} from "native-base";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Map from "../components/Map";

import NavigateCard from "../components/NavigateCard";
import RideOptionCard from "./RideOptionCard";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";

import { setDestination, setOrigin } from "../slices/navSlice";

const FindRideScreen = () => {
  const Stack = createNativeStackNavigator();

  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <>
      <Box safeArea>
        <Map />
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          nearbyPlacesAPI="GooglePlacesSearch"
          fetchDetails={true}
          enablePoweredByContainer={false}
          debounce={400}
          query={{
            key: "AIzaSyCj7BpyefcFJGLVIF_jdvOtwrGBNgI2owI",
            language: "en",
          }}
          returnKeyType={"search"}
          minLength={2}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            dispatch(
              setDestination({
                location: details.geometry.location,
                description: data.description,
              })
            );
            console.log(data, details);

            Navigation.navigate("RideOptionCard");
          }}
          styles={{
            container: {
              backgroundColor: "white",
              paddingTop: 20,
              flex: 0,
            },
            textInput: {
              fontSize: 10,
              backgroundColor: "#DDDDDF",
              borderRadius: 0,
            },
            textInputContainer: {
              paddingHorizontal: 20,
              paddingBottom: 0,
            },
          }}
        />

        <Stack.Navigator
          initialRouteName="NaviationCard"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name="NaviationCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionCard"
            component={RideOptionCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </Box>
    </>
  );
};

export default FindRideScreen;
