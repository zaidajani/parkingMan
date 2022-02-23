import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from 'react-native-paper';

const ShutBar = styled(View)`
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Input = styled(TextInput)`
  width: 300px;
`;

const FormContainer = styled.View`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const NewScreen = () => {
  return (
    <>
      <ShutBar>
        <Ionicons name="arrow-down-outline" size={30} />
      </ShutBar>
      <FormContainer>
        <Input
        label="Email"
        value="hi"
        onChangeText={text => console.log(text)}
        mode={{ type: 'outlined' }}
      />
      </FormContainer>
    </>
  );
};
