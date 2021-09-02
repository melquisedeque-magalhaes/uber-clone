import React from 'react'
import { Image, TouchableHighlight } from 'react-native'
import SvgUri from "expo-svg-uri";

import FreshFriesImage from '../../../assets/fresh-fries.svg'

import { Title, Container, LinkText, ImageContainer } from "./styles";

export function MarketCard() {
    return (
        <Container>
            <Title>Ganhe R$25 de desconto</Title>

            <TouchableHighlight>
                <LinkText>Faça seu pedido</LinkText>
            </TouchableHighlight>

            <ImageContainer>
                <SvgUri source={FreshFriesImage} width={100} height={100} />
            </ImageContainer>
        </Container>
    )
}