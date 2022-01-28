import styled from 'styled-components/native';
import { Dimensions } from 'react-native'
import Map from 'react-native-maps';

export const MapText = styled.Text`
    color: #fff;
    font-weight: bold;
    padding: 8px;
    font-size: 20px;
    margin-bottom: 20px;
`

export const ContainerMap = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
`

export const MapView = styled(Map)`
    width: ${Dimensions.get('window').width - 16}px;
    height: 200px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
`