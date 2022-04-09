import React, {useContext} from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import ListingScreen from '../screens/ListingScreen';
import Colors from '../styles/Colors';
import {AppContext} from '../context/AppContext';
import Searchbar from '../assets/search.png';
import CloseBTn from '../assets/CloseBTN.png';

const Stack = createStackNavigator();
const HomeStack = () => {
  const {searchbarVisible, searchbarHandler} = useContext(AppContext);

  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerTintColor: Colors.WHITE,
        headerStyle: {backgroundColor: Colors.BLACK},
      }}>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerTitle: () => null,
          headerBackTitle: () => null,
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="listing"
        options={_props => ({
          headerBackTitle: () => null,
          headerTitle: _props?.route?.params?.navigationTitle,
          headerRight: () => {
            if (!searchbarVisible) {
              return (
                <TouchableOpacity
                  onPress={() => searchbarHandler(true)}
                  style={styles.alignRight}>
                  <Image
                    source={searchbarVisible ? CloseBTn : Searchbar}
                    style={styles.searchBTN}
                  />
                </TouchableOpacity>
              );
            } else {
              return null;
            }
          },
        })}
        component={ListingScreen}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  searchBTN: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
});

export default HomeStack;
