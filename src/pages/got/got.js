import React from 'react'
import { Text, SafeAreaView, View, StyleSheet, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import Season1 from './season1'
  
  function App ({ navigation }) {

    const seasons = [
        {
            id: '1',
            title: 'Season 1',
        },
        {
            id: '2',
            title: 'Season 2'
        },
        {
            id: '3',
            title: 'Season 3'
        },
        {
            id: '4',
            title: 'Season 4'
        },
        {
            id: '5',
            title: 'Season 5'
        },
        {
            id: '6',
            title: 'Season 6'
        },
        {
            id: '7',
            title: 'Season 7'
        },
        {
            id: '8',
            title: 'Season 8'
        },   
    ]
    
    const Item = ({ title }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
    );

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Season1')}>
            <Item title={item.title} />
        </TouchableOpacity>
    );
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.top}>
        <Text style={styles.text}>
            Nove famílias nobres lutam pelo controle sobre as terras míticas de Westeros, 
            enquanto um antigo inimigo retorna depois de estar adormecido por milhares de anos.
            </Text>
        </View>
        <FlatList
          data={seasons}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({

    text: {
        color: 'black',
        fontSize: 17
    },

    top: {
        padding: 10
    },

    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: 'black',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
      color: 'white'
    },
  });
  

export default App