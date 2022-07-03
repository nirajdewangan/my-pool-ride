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

  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      fullName: "Aafreen Khan",
      timeStamp: "12:47 PM",
      recentText: "Good Day!",
      avatarUrl:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      fullName: "Sujitha Mathur",
      timeStamp: "11:11 PM",
      recentText: "Cheer up, there!",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      fullName: "Anci Barroco",
      timeStamp: "6:22 PM",
      recentText: "Good Day!",
      avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
    },
    {
      id: "68694a0f-3da1-431f-bd56-142371e29d72",
      fullName: "Aniket Kumar",
      timeStamp: "8:56 PM",
      recentText: "All the best",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
    },
    {
      id: "28694a0f-3da1-471f-bd96-142456e29d72",
      fullName: "Kiara",
      timeStamp: "12:47 PM",
      recentText: "I will call today.",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
    },
  ];

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

        <Heading fontSize="xl" p="4" pb="3">
          People offering ride
        </Heading>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Box
              borderBottomWidth="1"
              _dark={{
                borderColor: "gray.600",
              }}
              borderColor="coolGray.200"
              pl="4"
              pr="5"
              py="2"
            >
              <HStack space={3} justifyContent="space-between">
                <Avatar
                  size="48px"
                  source={{
                    uri: item.avatarUrl,
                  }}
                />
                <VStack>
                  <Text
                    _dark={{
                      color: "warmGray.50",
                    }}
                    color="coolGray.800"
                    bold
                  >
                    {item.fullName}
                  </Text>
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: "warmGray.200",
                    }}
                  >
                    {item.recentText}
                  </Text>
                </VStack>
                <Spacer />
                <Text
                  fontSize="xs"
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  alignSelf="flex-start"
                >
                  {item.timeStamp}
                </Text>
              </HStack>
            </Box>
          )}
          keyExtractor={(item) => item.id}
        />
      </Box>
    </>
  );
};

export default FindRideScreen;
