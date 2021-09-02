import styled from 'styled-components/native'
import { shade } from 'polished'
import SvgUri from "expo-svg-uri";

export const Container = styled.View`
    min-width: 80%;
    height: 100px;
    background-color: ${shade(0.5, '#FFC043')};
    margin-top: 16px;
    margin-bottom: 16px;
    border-radius: 8px;
    padding: 16px;

    position: relative;
`

export const Title = styled.Text`
    font-size: 16px;
    color: #fff;
    font-weight: bold;
    width: 60%;
`

export const ImageContainer = styled.View`
    position: absolute;
    width: 100px;
    height: 100px;
    top: 0;
    right: 0;
`

export const LinkText = styled.Text`
    font-size: 12px;
    color: #fff;
    margin-top: 16px;
    font-weight: bold;
`