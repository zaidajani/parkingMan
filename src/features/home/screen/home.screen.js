import React from "react";
import { Text, Image, FlatList, StyleSheet, SafeAreaView } from "react-native";
import { View } from "react-native-web";
import styled from "styled-components/native";
import { CardComponent } from "../../../components/Card.component";

const Spacer = styled.View`
  height: 15px;
`

const HomeFlatlistWrapper = styled.View`
  height: 450px;
`;

const BikeImage = styled(Image)`
  width: 130px;
  height: 70px;

`;

const BikeWrapper = styled.View`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const CheckText = styled.Text`
  font-family: Karla_500Medium;
`;

const HomeScreenWrapper = styled.View`
  height: 100%;
  width: 100%;
  background-color: white;
`;

export const HomeComponent = () => {
  return (
    <>
    <HomeScreenWrapper>

    <SafeAreaView>
      <HomeFlatlistWrapper>
        <FlatList 
          data={[{name: 1}]}
          renderItem={() => {
            return (
              <>
                <CardComponent />
                <Spacer />
              </>
            )
          }}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 16 }}
        />
        </HomeFlatlistWrapper>
        <BikeWrapper>
          <BikeImage
            source={{
              uri: 'https://m.media-amazon.com/images/I/61VKI5fuwOL._SL1280_.jpg',
            }}
          />
          <CheckText>
            Find previous parkings in the history
          </CheckText>
        </BikeWrapper>
      </SafeAreaView>
    </HomeScreenWrapper>
    </>
  );
};


