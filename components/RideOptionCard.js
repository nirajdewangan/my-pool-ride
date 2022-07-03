// import NavOptions from "../components/NavOptions";
import { Text, View, Button, Pressable } from "native-base";
import { useNavigation } from "@react-navigation/native";
import Map from "./Map";

const RideOptionCard = () => {
  // const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Ride option card</Text>
      <Map />
      {/* 
      <Button onPress={() => navigation.navigate("HomeScreen")}>
        Go Back Me
      </Button> */}
    </View>
  );
};

export default RideOptionCard;
