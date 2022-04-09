import React, {createContext, useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';

export const AppContext = createContext({});

export const AppContextProvider = ({children}) => {
  const [searchbarVisible, setSearchbarVisible] = useState(false);

  const searchbarHandler = PAYLOAD => setSearchbarVisible(PAYLOAD);
  const value = {searchbarVisible, searchbarHandler};
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
