import React, {useState, useRef, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
const {height, width} = Dimensions.get('window');

import PAGE1 from '../constants/PAGE1.json';
import PAGE2 from '../constants/PAGE1.json';
import PAGE3 from '../constants/PAGE1.json';
import Poster1 from '../assets/poster1.jpg';
import Poster2 from '../assets/poster2.jpg';
import Poster3 from '../assets/poster3.jpg';
import Poster4 from '../assets/poster4.jpg';
import Poster5 from '../assets/poster5.jpg';
import Poster6 from '../assets/poster6.jpg';
import Poster7 from '../assets/poster7.jpg';
import Poster8 from '../assets/poster8.jpg';
import Poster9 from '../assets/poster9.jpg';
import Colors from '../styles/Colors';
import CustomSearch from '../components/CustomSearch';
import {AppContext} from '../context/AppContext';

const ListingScreen = () => {
  const flatRef = useRef(1);
  const [items, setItems] = useState(PAGE1.page['content-items'].content);
  const [tempItems, setTempItems] = useState(
    PAGE1.page['content-items'].content,
  );
  const {searchbarVisible, searchbarHandler} = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  console.log(flatRef);

  const onEndReached = () => {
    if (flatRef.current <= 3) {
      flatRef.current = flatRef.current + 1;
      if (flatRef.current < 4) {
        setLoading(true);
      }
      if (flatRef.current === 2) {
        setTimeout(() => {
          setLoading(false);
          setItems([...items, ...PAGE2.page['content-items'].content]);
          setTempItems([...items, ...PAGE2.page['content-items'].content]);
        }, 2000);
      } else if (flatRef.current === 3) {
        setTimeout(() => {
          setLoading(false);
          setItems([...items, ...PAGE3.page['content-items'].content]);
          setTempItems([...items, ...PAGE3.page['content-items'].content]);
        }, 2000);
      }
    }
  };

  const _renderItem = ({item}) => {
    let img = item['poster-image'];
    return (
      <View style={styles.itemContainer}>
        <Image
          source={
            img === 'poster1.jpg'
              ? Poster1
              : img === 'poster2.jpg'
              ? Poster2
              : img === 'poster3.jpg'
              ? Poster3
              : img === 'poster3.jpg'
              ? Poster4
              : img === 'poster5.jpg'
              ? Poster5
              : img === 'poster6.jpg'
              ? Poster6
              : img === 'poster7.jpg'
              ? Poster7
              : img === 'poster8.jpg'
              ? Poster8
              : Poster9
          }
          style={styles.itemIMG}
          resizeMode="contain"
        />
        <Text style={styles.itemName} numberOfLines={1}>
          {item?.name}
        </Text>
      </View>
    );
  };

  const onChangeText = text => {
    setSearchValue(text);
    const filteredData = items.filter(f =>
      f.name.toLowerCase().includes(text.toLowerCase()),
    );
    setTempItems(filteredData);
  };

  const _renderEmptyComponent = () => {
    return (
      <View>
        <Text style={styles.emptyText}>No items found</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {searchbarVisible && (
        <CustomSearch
          placeholder="Search ..."
          onCloseBTNPress={() => searchbarHandler(false)}
          onChangeText={val => onChangeText(val)}
          value={searchValue}
        />
      )}
      <FlatList
        data={tempItems}
        renderItem={({item}) => <_renderItem item={item} />}
        numColumns={3}
        onEndReached={onEndReached}
        ListEmptyComponent={<_renderEmptyComponent />}
        ListFooterComponent={
          loading && (
            <View style={styles.outerContainer}>
              <ActivityIndicator size={25} color={Colors.WHITE} />
            </View>
          )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', marginVertical: 4},
  itemContainer: {marginHorizontal: 4, marginBottom: 25},
  itemIMG: {height: height * 0.22, width: width * 0.3},
  itemName: {color: Colors.WHITE, width: width * 0.3},
  alignRight: {alignSelf: 'flex-end'},
  emptyText: {color: Colors.WHITE},
  outerContainer: {minHeight: 60},
});

export default ListingScreen;
