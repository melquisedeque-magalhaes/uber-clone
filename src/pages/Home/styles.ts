import styled from 'styled-components/native'
import { Platform } from 'react-native'


export const Container = styled.SafeAreaView`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #111;
    padding-top: ${Platform.OS === 'android' ? '50px' : '0px'};
`

export const ContentCard = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: white;
`



