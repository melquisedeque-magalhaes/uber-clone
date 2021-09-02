import React from 'react';
import { Image, ImageSourcePropType } from 'react-native'
import { Container, Title } from "./styles";

interface CardsProps {
    name: string;
    url: ImageSourcePropType;
}

export function Cards({ name, url }: CardsProps) {

    return (
        <Container>

            <Image
                source={url}
                style={{ width: '75%', height: '75%' }}
            />

            <Title>{name}</Title>
        </Container>
    )
}