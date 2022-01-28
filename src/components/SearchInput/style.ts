import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const ButtonInput = styled.TouchableOpacity`
    flex: 1;
    position: absolute;
    bottom: 0px;
    height: 100px;
    width: ${Dimensions.get('window').width}px;
    background-color: #111;
    padding: 16px;
`

export const Input = styled.View`
    height: 50px;
    background-color: #222;
    text-align: center;
    border-radius: 8px;
    
    align-items: center;
    justify-content: center;
`

export const InputText = styled.Text`
    font-weight: bold;
    font-size: 16px;
    color: #fff;
`