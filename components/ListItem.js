import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import {uploadsUrl} from '../utils/variables';

const ListItem = (props) => {
  return (
    <TouchableOpacity style={styles.row}>
      <View style={styles.imagebox}>
        <Image
          source={{uri: uploadsUrl + props.singleMedia.thumbnails.w160}}
          style={styles.image}
        />
      </View>
      <View style={styles.textbox}>
        <Text style={styles.listTitle}>{props.singleMedia.title}</Text>
        <Text>{props.singleMedia.description}</Text>
      </View>
    </TouchableOpacity>
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

ListItem.propTypes = {
  singleMedia: PropTypes.object.isRequired,
};

export default ListItem;
