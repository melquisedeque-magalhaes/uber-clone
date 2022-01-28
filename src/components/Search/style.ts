import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    position: absolute;
    top: 32px;
    height: 100px;
    width: ${Dimensions.get('window').width}px;
    background-color: #111;
    padding: 16px;
`