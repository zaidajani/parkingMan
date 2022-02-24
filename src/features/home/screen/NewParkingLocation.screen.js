import React, { useState, useRef, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ShutBar = styled(View)`
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ParkingCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

const PhotoTakeWrapper = styled.View`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 80px;
`;

const PhotoTake = styled.View`
  height: 80px;
  width: 80px;
  border-radius: 40px;
  border: 5px solid #cbcbcb;
  background-color: #fefefe;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const NewScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`photo-uri`, photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
      <ShutBar>
        <Ionicons name="arrow-down-outline" size={30} />
      </ShutBar>
      <ParkingCamera
        ref={(camera) => (cameraRef.current = camera)}
        type={Camera.Constants.Type.back}
        ratio={"16:9"}
      >
        <PhotoTakeWrapper>
          <TouchableOpacity onPress={snap}>
            <PhotoTake>
              <Ionicons name="checkmark-outline" size={40}></Ionicons>
            </PhotoTake>
          </TouchableOpacity>
        </PhotoTakeWrapper>
      </ParkingCamera>
    </>
  );
};
