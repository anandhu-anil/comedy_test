import React from 'react';

import HomeStack from './routes/HomeStack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {AppContextProvider} from './context/AppContext';

import Colors from './styles/Colors';

const App = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: Colors.BLACK,
    },
  };
  return (
    <AppContextProvider>
      <NavigationContainer theme={MyTheme}>
        <HomeStack />
      </NavigationContainer>
    </AppContextProvider>
  );
};

export default App;
