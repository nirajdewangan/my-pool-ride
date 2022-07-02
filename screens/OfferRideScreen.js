// import NavOptions from "../components/NavOptions";
import { Text, View, Button, Pressable } from "native-base";
import { useNavigation } from "@react-navigation/native";

const OfferRideScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Offer a ride Screen</Text>

      <Button onPress={() => navigation.navigate("HomeScreen")}>
        Go Back Me
      </Button>
    </View>
  );
};

export default OfferRideScreen;
