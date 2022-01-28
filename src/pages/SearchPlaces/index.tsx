import { StatusBar } from 'expo-status-bar'
import React from 'react'

import { Search } from '../../components/Search'
import { Container } from './styles'

export function SearchPlaces(){
    return(
        <>
             <StatusBar style="light" />
            <Container>
                <Search />
            </Container>
        </>
    )
}