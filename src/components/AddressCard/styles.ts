import styled from 'styled-components/native'

export const Container = styled.View`
    margin-top: 16px;

    flex-direction: row;
    max-width: 100%;
    height: 50px;
    background-color: transparent;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`

export const Content = styled.View`
    flex-direction: row;
    align-items: center;
`

export const AddressTitle = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 16px;
`

export const AddressText = styled.Text`
    margin-top: 4px;
    color: #fff;
    font-size: 12px;
`

export const IconContainer = styled.View`
    width: 30px;
    height: 30px;
    border-radius: 20px;
    background-color: #222;
    margin-right: 16px;

    display: flex;
    align-items: center;
    justify-content: center;
`