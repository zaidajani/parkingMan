import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { Text } from "react-native";
import { HomeComponent } from "../../features/home/screen/home.screen";
import { ParkingDetail } from "../../features/home/screen/parkingDetail.screen";
import { NewScreen } from "../../features/home/screen/NewParkingLocation.screen";

const ParkingStack = createStackNavigator();

export const ParkingNavigator = ({ lat, lng }) => {
  return (
    <ParkingStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <ParkingStack.Screen 
        name="Parking"
        component={HomeComponent}
        options={{ headerShown: false }}
      />
      <ParkingStack.Screen 
        name="ParkingDetail"
        component={ParkingDetail}
        options={{ headerShown: false }}
      />
      <ParkingStack.Screen 
        name="NewScreen"
        component={NewScreen}
        options={{ headerShown: false }}
      />
    </ParkingStack.Navigator>
  )
}