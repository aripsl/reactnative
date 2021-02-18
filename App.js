import React from 'react';
import { StatusBar, Text, View } from 'react-native';

import Routes from './src/Routes';

function App() {
  return (
    <View>
      <StatusBar />

      <Routes />
    </View>
  )
}

export default App;