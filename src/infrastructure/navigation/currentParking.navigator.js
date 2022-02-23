import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeComponent } from "../../features/home/screen/home.screen";

const ParkingStack = createStackNavigator();

export const ParkingNavigator = () => {
  return (
    <ParkingStack.Navigator>
      <ParkingStack.Screen 
        name="Parking"
        component={HomeComponent}
        options={{ headerShown: false }}
      />
    </ParkingStack.Navigator>
  )
}