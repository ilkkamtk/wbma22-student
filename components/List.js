import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {baseUrl} from '../utils/variables';
import ListItem from './ListItem';

const List = () => {
  const [mediaArray, setMediaArray] = useState([]);
  // let mediaArray = [];
  const loadMedia = async (start = 0, limit = 10) => {
    try {
      const response = await fetch(
        `${baseUrl}media?start=${start}&limit=${limit}`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      const media = await Promise.all(
        json.map(async (item) => {
          const response = await fetch(baseUrl + 'media/' + item.file_id);
          const mediaData = await response.json();
          // console.log(mediaData);
          return mediaData;
        })
      );
      setMediaArray(media);
      console.log(mediaArray);
    } catch (error) {
      console.error(error);
    }
  };
  // Call loadMedia() only once when the component is loaded
  useEffect(() => {
    loadMedia(0, 5);
  }, []);

  return (
    <FlatList
      data={mediaArray}
      keyExtractor={(item) => item.file_id.toString()}
      renderItem={({item}) => <ListItem singleMedia={item} />}
    ></FlatList>
  );
};

export default List;
