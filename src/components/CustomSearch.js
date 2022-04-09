import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
const {height, width} = Dimensions.get('window');

import Colors from '../styles/Colors';

const Search = ({
  onChangeText,
  value,
  placeholder,
  onCloseBTNPress,
  autoFocus = true,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={Colors.WHITE}
        style={styles.input}
        selectionColor={Colors.WHITE}
        autoFocus={autoFocus}
      />
      <TouchableOpacity onPress={onCloseBTNPress}>
        <Image
          source={require('../assets/CloseBTN.png')}
          style={styles.closeBTN}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    width: width * 0.9,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: Colors.WHITE,
    marginVertical: 15,
  },
  input: {width: width * 0.7, color: Colors.WHITE},
  closeBTN: {height: 30, width: 30, borderRadius: 15},
});

export default Search;
