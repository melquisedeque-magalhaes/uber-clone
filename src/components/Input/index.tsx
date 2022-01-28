import React from 'react'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../interfaces/RoutesInterface';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';

import { 
    InputButton, 
    InputContainer, 
    InputText, 
    MarkDate, 
    MarkDateContainer, 
    MarkDateSeparator, 
    MarkDateText 
} from './styles'

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export function Input(){

    const navigator = useNavigation<HomeScreenNavigationProp>()

    function handleNextPage(){
        navigator.navigate('SearchPlaces')
    }

    return  (
        <InputContainer>
            <InputButton onPress={handleNextPage}>
                <InputText>Para Onde ?</InputText>
            </InputButton>

            <MarkDateContainer>
            <MarkDateSeparator />
            <MarkDate>
                <FontAwesome name="clock-o" size={20} color="#fff" />
                <MarkDateText>Agora</MarkDateText>
                <Feather name="chevron-down" size={20} color="#fff" />
            </MarkDate>
            </MarkDateContainer>

        </InputContainer>
    )
}