import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ImageBackground } from 'react-native';
import SongList from '~/components/SongList';

import styles from './styles';

const Album = ({ navigation }) => {
  const { album } = navigation.state.params;
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.thumbnail} blurRadius={5} source={{ uri: album.thumbnail }}>
        <View style={styles.thumbnailContainer}>
          <Text style={styles.title}>{album.title}</Text>
          <Text style={styles.author}>{album.author}</Text>
        </View>
      </ImageBackground>

      <SongList data={album.songs} />
    </View>
  );
};

Album.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

Album.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.album.title,
});
export default Album;
