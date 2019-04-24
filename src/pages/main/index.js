import React, { Component } from 'react';
import Proptypes from 'prop-types';
import {
  View, StatusBar, TouchableOpacity, FlatList, ActivityIndicator,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as AlbumsActions } from '~/store/ducks/albums';

import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

import AlbumItem from './components/AlbumItem';

class Main extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Sua Biblioteca',
    headerRight: (
      <TouchableOpacity style={styles.headerRight} onPress={() => navigation.navigate('Search')}>
        <Icon name="search" size={24} color="#fff" />
      </TouchableOpacity>
    ),
  });

  static propTypes = {
    navigation: Proptypes.shape({
      navigate: Proptypes.func,
    }).isRequired,
    getAlbumsRequest: Proptypes.func.isRequired,
    albums: Proptypes.shape({
      data: Proptypes.arrayOf(
        Proptypes.shape({
          id: Proptypes.number,
        }),
      ),
    }).isRequired,
  };

  componentDidMount() {
    const { getAlbumsRequest } = this.props;
    getAlbumsRequest();
  }

  render() {
    const { navigation, albums } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        {albums.loading ? (
          <ActivityIndicator size="small" color="#999" style={styles.loading} />
        ) : (
          <FlatList
            data={albums.data}
            keyExtractor={album => String(album.id)}
            renderItem={({ item }) => (
              <AlbumItem
                onPress={() => navigation.navigate('Album', { album: item })}
                album={item}
              />
            )}
          />
        )}
      </View>
    );
  }
}
const mapStateToProps = state => ({
  albums: state.albums,
});

const mapDispatchToProps = dispatch => bindActionCreators(AlbumsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
