import React,{ useState, useEffect } from 'react';
import { FlatList, ImageSourcePropType } from 'react-native'
import { ContainerCardsMenu } from './styles'

import { Cards } from '../Cards';

import CarImage from '../../../assets/car_card.png'
import supermarketImage from '../../../assets/supermarket.png'
import packageImage from '../../../assets/package.png'

interface MenuData {
    id: number;
    name: string;
    url: ImageSourcePropType;
}

export function MenuHome(){

    const [menus, setMenus] = useState<MenuData[]>([])

    const data = [
        {
          id: 1,
          name: 'Viagem',
          url: CarImage
        }, {
          id: 2,
          name: 'Entrega',
          url: packageImage
        }, {
          id: 3,
          name: 'Mercado',
          url: supermarketImage
        }
      ]
    
      useEffect(() => {
        setMenus(data)
      }, [])

    return (
        <ContainerCardsMenu>
            <FlatList
                data={menus}
                keyExtractor={item => String(item.id)}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                <Cards name={item.name} url={item.url} />
                )}
            />
        </ContainerCardsMenu>
    )
}