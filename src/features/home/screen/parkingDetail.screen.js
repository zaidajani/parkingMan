import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Button } from "react-native-paper";
import MapView from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";

const Title = styled.Text`
  font-family: Karla_500Medium;
  font-size: 20px;
  text-align: center;
  margin-top: 10px;
  z-index: 1000;
`;

const Map = styled(MapView)`
  height: 400px;
`;

const ShutBar = styled(View)`
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const TitleContainer = styled(View)`
  background-color: white;
  height: 100%;
`;

const TeslaImage = styled(Image)`
  width: 300px;
  height: 200px;
  margin-left: 200px;
  margin-top: 50px;
  position: absolute;
`;

const LesButons = styled(Button)`
  width: 150px;
`

const ButtonContainer = styled.View`
  padding: 20px;
  width: 300px;
  height: 100%;
  margin-top: 50px;
  margin-left: 10px;s
`;

const Spacer = styled.View`
  height: 15px;
`;

export const ParkingDetail = () => {
  return (
    <>
      <ShutBar>
        <Ionicons name="arrow-down-outline" size={30} />
      </ShutBar>
      <Map
        region={{
          latitude: 19.017645,
          longitude: 73.024722,
          latitudeDelta: 0.01,
          longitudeDelta: 0.02,
        }}
      >
        <MapView.Marker
          key="unique"
          title="parking-location"
          coordinate={{
            latitude: 19.017645,
            longitude: 73.024722,
          }}
        />
      </Map>
      <TitleContainer>
        <Title>Your recent parking location</Title>
        <TouchableOpacity onPress={() => null}>
          <ButtonContainer>
            <LesButons
              mode="outlined"
              onPress={() => console.log("Pressed")}
            >
              Direction
            </LesButons>
            <Spacer />
            <LesButons
              mode="outlined"
              color="blue"
              onPress={() => console.log("Pressed")}
            >
              Delete
            </LesButons>
          </ButtonContainer>
        </TouchableOpacity>
        <TeslaImage
          source={{
            uri: "https://cdn-www.pod-point.com/model-3-21-white-background.jpg?mtime=20210128110324&focal=none",
          }}
        />
      </TitleContainer>
    </>
  );
};
