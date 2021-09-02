import React from 'react'
import { AddressText, AddressTitle, Container, Content, IconContainer } from './styles'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Feather from '@expo/vector-icons/Feather';
import { View } from 'react-native'

export function AddressCard() {
    return (
        <Container>
            <Content>
                <IconContainer>
                    <FontAwesome name="star" color="#fff" size={16} />
                </IconContainer>

                <View style={{ borderBottomWidth: 1, borderColor: '#222', width: '80%', padding: 8 }}>
                    <AddressTitle>Casa do Amor</AddressTitle>
                    <AddressText>Colegio A J</AddressText>
                </View>

            </Content>
            <Feather name="chevron-right" size={20} color="#fff" />
        </Container>
    )
}