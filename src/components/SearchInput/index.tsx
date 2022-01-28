import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { RootStackParamList } from '../../interfaces/RoutesInterface'

import { Input, InputText } from './style'

import { ButtonInput } from './style';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export function SearchInput(){

    const navigator = useNavigation<HomeScreenNavigationProp>()

    function handleNextPage(){
        navigator.navigate('SearchPlaces')
    }

    return(
        <ButtonInput onPress={handleNextPage}>
            <Input>
                <InputText>Pesquisar destino</InputText>
            </Input>
        </ButtonInput>
    )
}