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

import { useSelector } from "react-redux";
import { selectDestination, selectOrigin } from "../slices/navSlice";

import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { useEffect, useRef } from "react";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!origin || !destination) return;

    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origin, destination]);
  return (
    <>
      <MapView
        ref={mapRef}
        style={{ width: 400, height: 200 }}
        mapType="mutedStandard"
        initialRegion={{
          latitude: origin.location.lat,
          longitude: origin.location.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {origin && destination && (
          <MapViewDirections
            origin={origin.description}
            destination={destination.description}
            apikey="AIzaSyCj7BpyefcFJGLVIF_jdvOtwrGBNgI2owI"
            strokeColor="blue"
            strokeWidth={3}
          />
        )}
        {origin?.location && (
          <Marker
            coordinate={{
              latitude: origin.location.lat,
              longitude: origin.location.lng,
            }}
            title="Origin"
            description={origin.description}
            identifier="origin"
          />
        )}

        {destination?.location && (
          <Marker
            coordinate={{
              latitude: destination.location.lat,
              longitude: destination.location.lng,
            }}
            title="Origin"
            description={destination.description}
            identifier="origin"
          />
        )}
      </MapView>
    </>
  );
};

export default Map;
