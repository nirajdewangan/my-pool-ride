// import NavOptions from "../components/NavOptions";

import { useNavigation } from "@react-navigation/native";
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

import MapView, { Marker } from "react-native-maps";

const Map = () => {
  return (
    <>
      <MapView
        style={{ width: 400, height: 400 }}
        mapType="mutedStandard"
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </>
  );
};

export default Map;
