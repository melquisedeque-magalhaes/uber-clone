import styled from 'styled-components/native'
import { Platform, Dimensions } from 'react-native'
import MapView from 'react-native-maps';

export const Container = styled.View`
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

export const ContainerCardsMenu = styled.View`
    flex: 1;
    align-items: center;
`

export const InputContainer = styled.View`
    margin-top: 16px;
    max-width: 100%;
    height: 50px;
    background-color: #222;
    padding: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    
`

export const Input = styled.TouchableOpacity`
    height: 16px;
`

export const InputText = styled.Text`
    font-weight: bold;
    color: #fff;
`

export const MarkDate = styled.View`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;

    background-color: #111;
    border-radius: 50px;
    width: 120px;
    height: 30px;
`

export const MarkDateContainer = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
`

export const MarkDateSeparator = styled.View`
    border-left-width: 1px;
    border-color: #444;
    min-height: 100%;
    margin-right: 8px;
`;

export const MarkDateText = styled.Text`
    color: #fff;
    font-weight: bold;
`

export const MapText = styled.Text`
    color: #fff;
    font-weight: bold;
    padding: 8px;
    font-size: 20px;
    margin-bottom: 20px;
`

export const ContainerMap = styled.View`
    flex: 1;
    justify-content: center;
`

export const Map = styled(MapView)`
    width: ${Dimensions.get('window').width - 16}px;
    height: 200px;
    align-items: center;
    justify-content: center;
`