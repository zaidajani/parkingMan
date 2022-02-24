import React, { useEffect, useState } from "react";
import { Card } from "react-native-paper";
import { Text, View } from "react-native";
import styled from "styled-components";
import AsyncStorgate from "@react-native-async-storage/async-storage";

const InfoCard = styled(Card)`
  background-color: white;
  border-radius: 12px;
  display: flex;
`;

const InfoCardCover = styled(Card.Cover)`
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`;

const Info = styled.View`
  padding: 16px;
`;

const Title = styled.Text`
  font-family: Karla_500Medium;
  font-size: 20px;
  text-align: center;
`


export const CardComponent = () => {
  let data = AsyncStorgate.getItem('photo-uri');
  const [photoUri, setPhotoUri] = useState(null);
  {data && setPhotoUri(data._w)}

  useEffect(() => {
    setPhotoUri(data._W);
  }, [data]);

  return (
    <InfoCard elevation={5}>
      <View>
        <InfoCardCover
          key="parking-location"
          source={{ uri: photoUri }}
        />
      </View>
      <Info>
        <Title>Your current parking location</Title>
      </Info>
    </InfoCard>
  );
};

export const JustImage = () => {
  return (
    <InfoCard elevation={5}>
      <View>
      <InfoCardCover
          key="parking-location"
          source={{ uri: "https://static.bhphotovideo.com/explora/sites/default/files/styles/top_shot/public/topshot_72.jpg" }}
        />
      </View>
    </InfoCard>
  )
}