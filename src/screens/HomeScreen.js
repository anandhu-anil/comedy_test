import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const HomeScreen = ({navigation: {navigate}}) => {
  return (
    <View style={styles.container}>
      <Button
        title="Romantic comedy"
        onPress={() =>
          navigate('listing', {navigationTitle: 'Romantic comedy'})
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default HomeScreen;
