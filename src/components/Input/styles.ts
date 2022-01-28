import styled from 'styled-components/native'

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

export const InputButton = styled.TouchableOpacity`
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