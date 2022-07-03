import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
  View,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform, StyleSheet } from "react-native";

import HomeScreen from "./screens/HomeScreen";
import FindRideScreen from "./screens/FindRideScreen";
import OfferRideScreen from "./screens/OfferRideScreen";
import NavigateCard from "./components/NavigateCard";
import RideOptionCard from "./components/RideOptionCard";



//Navtigation setup
// import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { useNavigation } from "@react-navigation/native";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";

//setup Redux toolkit
import { Provider } from "react-redux";
import { store } from "./store";

// Define the config
const config = {
  fontConfig: {
    Roboto: {
      100: {
        normal: "Roboto-Light",
        italic: "Roboto-LightItalic",
      },
      200: {
        normal: "Roboto-Light",
        italic: "Roboto-LightItalic",
      },
      300: {
        normal: "Roboto-Light",
        italic: "Roboto-LightItalic",
      },
      400: {
        normal: "Roboto-Regular",
        italic: "Roboto-Italic",
      },
      500: {
        normal: "Roboto-Medium",
      },
      600: {
        normal: "Roboto-Medium",
        italic: "Roboto-MediumItalic",
      },

      700: {
        normal: "Roboto-Bold",
      },
      800: {
        normal: "Roboto-Bold",
        italic: "Roboto-BoldItalic",
      },
      900: {
        normal: "Roboto-Bold",
        italic: "Roboto-BoldItalic",
      },
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
    mono: "Roboto",
  },
};

// extend the theme
export const theme = extendTheme({ config });

// const navigation = useNavigation();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
          >{true && (<>
          <Stack.Screen
            name="SignInScreen"
            component={SignInScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SignUpScreen"
            component={SignUpScreen}
            options={{
              headerShown: false,
            }}
          />
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="FindRideScreen"
              component={FindRideScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="OfferRideScreen"
              component={OfferRideScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="NavigateCard"
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
            /></>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}

// Color Switch Component
// function ToggleDarkMode() {
//   const { colorMode, toggleColorMode } = useColorMode();
//   return (
//     <HStack space={2} alignItems="center">
//       <Text>Dark</Text>
//       <Switch
//         isChecked={colorMode === "light"}
//         onToggle={toggleColorMode}
//         aria-label={
//           colorMode === "light" ? "switch to dark mode" : "switch to light mode"
//         }
//       />
//       <Text>Light</Text>
//     </HStack>
//   );
// }

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC'
  }
})
