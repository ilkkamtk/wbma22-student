import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import GlobalStyles from './utils/GlobalStyles';

const mediaArray = [
  {
    key: '0',
    title: 'Title 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
    thumbnails: {
      w160: 'http://placekitten.com/160/161',
    },
    filename: 'http://placekitten.com/2048/1920',
  },
  {
    key: '1',
    title: 'Title 2',
    description:
      'Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ',
    thumbnails: {
      w160: 'http://placekitten.com/160/164',
    },
    filename: 'http://placekitten.com/2041/1922',
  },
  {
    key: '2',
    title: 'Title 3',
    description:
      'Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ',
    thumbnails: {
      w160: 'http://placekitten.com/160/167',
    },
    filename: 'http://placekitten.com/2039/1920',
  },
];

const App = () => {
  return (
    <SafeAreaView style={GlobalStyles.AndroidSafeArea}>
      <FlatList
        data={mediaArray}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.row}>
              <View style={styles.imagebox}>
                <Image
                  source={{uri: item.thumbnails.w160}}
                  style={styles.image}
                />
              </View>
              <View style={styles.textbox}>
                <Text style={styles.listTitle}>{item.title}</Text>
                <Text>{item.description}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      ></FlatList>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#eee',
    borderRadius: 6,
    marginHorizontal: 10,
    marginBottom: 5,
  },
  imagebox: {
    flex: 1,
  },
  image: {
    flex: 1,
    borderRadius: 6,
  },
  textbox: {
    flex: 2,
    padding: 10,
  },
  listTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 15,
  },
});

export default App;
