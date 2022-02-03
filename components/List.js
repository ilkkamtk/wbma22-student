import React from 'react';
import {FlatList} from 'react-native';
import {useMedia} from '../hooks/ApiHooks';
import ListItem from './ListItem';
import PropTypes from 'prop-types';

const List = ({navigation}) => {
  const {mediaArray, loading} = useMedia();
  console.log('List load', loading);

  return (
    <FlatList
      data={mediaArray}
      keyExtractor={(item) => item.file_id.toString()}
      renderItem={({item}) => (
        <ListItem navigation={navigation} singleMedia={item} />
      )}
    ></FlatList>
  );
};

List.propTypes = {
  navigation: PropTypes.object,
};

export default List;
