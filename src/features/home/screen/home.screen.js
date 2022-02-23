import React from "react";
import { Image, FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { CardComponent } from "../../../components/Card.component";
import { Ionicons } from "@expo/vector-icons";

const Spacer = styled.View`
  height: 15px;
`;

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

const IconWrapper = styled.View`
  height: 60px;
  width: 60px;
  border-radius: 40px;
  margin-right: 10px;
  background-color: #0054ff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 310px;
  margin-top: 100px;
`;

export const HomeComponent = ({ navigation }) => {
  return (
    <>
      <HomeScreenWrapper>
        <SafeAreaView>
          <HomeFlatlistWrapper>
            <FlatList
              data={[{ name: 1 }]}
              renderItem={() => {
                return (
                  <>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("ParkingDetail")}
                    >
                      <CardComponent imgUri="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" />
                      <Spacer />
                    </TouchableOpacity>
                  </>
                );
              }}
              keyExtractor={(item) => item.name.toString()}
              contentContainerStyle={{ padding: 16 }}
            />
          </HomeFlatlistWrapper>
          <BikeWrapper>
            <BikeImage
              source={{
                uri: "https://m.media-amazon.com/images/I/61VKI5fuwOL._SL1280_.jpg",
              }}
            />
            <CheckText>Find previous parkings in the history</CheckText>
          </BikeWrapper>
          <TouchableOpacity onPress={() => navigation.navigate('NewScreen')}>
            <IconWrapper>
              <Ionicons name="add-outline" size={35} color="white" />
            </IconWrapper>
          </TouchableOpacity>
        </SafeAreaView>
      </HomeScreenWrapper>
    </>
  );
};
