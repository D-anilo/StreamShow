import React from 'react'
import { SafeAreaView,
    StyleSheet,
    View,
    Text,
    FlatList,
    ScrollView,
    Item,
    StatusBar} from 'react-native'
import VideoPlayer from 'react-native-video-player'



const App = ({ navigation }) => {

    const eps = [
        {
            id: '1',
            title: 'Winter Is Coming',
            video: './seasons/season1/estoulargado.mp4'
        },
        {
            id: '2',
            title: "The Kingsroad"
        },
        {
            id: '3',
            title: "Lord Snow"
        },
        {
            id: '4',
            title: "Cripples, Bastards, and Broken Things"
        },
        {
            id: '5',
            title: 	"The Wolf and the Lion"
        },
        {
            id: '6',
            title: "A Golden Crown"
        },
        {
            id: '7',
            title: "You Win or You Die"
        },
        {
            id: '8',
            title: "The Pointy End"
        },   
        {
            id: '9',
            title: "Baelor"
        },
        {
            id: '10',
            title: "Fire and Blood"
        },
    ]

    const Item = ({ title }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
    );

    const renderItem = ({ item }) => (
        <View>
            <VideoPlayer video={{uri: item.video}}></VideoPlayer>
            <Item title={item.title} />
        </View>
      
    );
  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={eps}
          keyExtractor={(item, index) => `${index}`}
          renderItem={renderItem}          
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