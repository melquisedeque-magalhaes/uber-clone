import React from 'react';
import { View, ScrollView } from 'react-native'

import { MarketCard } from '../../components/MarketCard';
import { AddressCard } from '../../components/AddressCard';
import { MenuHome } from '../../components/MenuHome';
import { Input } from '../../components/Input';

import { Container } from './styles';
import { MapHome } from '../../components/MapHome';

export function Home(){
    
      return (
          <Container>

            <ScrollView
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
    
              <View style={{ flex: 1 }}>
                <MarketCard />
  
                <MenuHome />
  
              </View>
  
              <View style={{ flex: 1 }}>
                <Input />
  
                <AddressCard />
                <AddressCard />
              </View>
  
              <MapHome />
              
            </ScrollView>
          </Container>
    )
}

