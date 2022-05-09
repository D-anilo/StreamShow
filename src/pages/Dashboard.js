import React, { useState} from 'react'
import { FlatList, Text, SafeAreaView, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import got from './got/got.js'

function Dashboard ({ navigation }) {

    const [selectedId, setSelectedId] = useState(null);
  
    const images = [
        {
            id: 1,
            name: 'Game of Thrones',
            image: require('../images/got.jpg')
        },
        {
            id: 2,
            name: 'Breaking Bad',
            image: require('../images/bb.png')
        },
        {
            id: 3,
            name: 'The Walking Dead',
            image: require('../images/twd.jpg')
        }
    ]

    const renderItem = ({ item }) => {
        
      return (
        <SafeAreaView style={{alignContent: 'center', justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('got')}>
                <Image source={item.image} style={styles.imagem}></Image>
            </TouchableOpacity>
        </SafeAreaView>
            
      );
    };

    return (
          <FlatList
            data={images}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
          />
      );
}
  
  const App = () => {
    
  };
  
  const styles = StyleSheet.create({

    button: {
        opacity: 15,
        elevation: 100,
    },

    imagem: {
        maxHeight: '100%',
        justifyContent: 'center',
        opacity: 15,
    }
  });

export default Dashboard
  
  
  