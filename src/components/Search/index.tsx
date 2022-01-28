import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Container } from './style';


export function Search(){
    return(
        <Container>
            <GooglePlacesAutocomplete 
                suppressDefaultStyles
                placeholder="Pesquisar destino"
                onPress={() => {}}
                query={{
                    key: 'AIzaSyCETOp9daUJwF-GKQAVEbZ23_Vy1MtaOKk',
                    language: 'pt-BR'
                }}
                styles={{
                    textInput: {
                        backgroundColor: '#222',
                        borderRadius: 8,
                        height: 50,
                        fontSize: 16,
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: '#fff'
                    },
                }}
                textInputProps={{
                    autoCapitalize: "none",
                    autoCorrect: false,
                    placeholderTextColor: '#fff'
                }}
                enablePoweredByContainer={false}
            />
        </Container>
    )
}