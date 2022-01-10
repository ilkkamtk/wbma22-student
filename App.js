import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaView} from 'react-native';
import GlobalStyles from './utils/GlobalStyles';
import List from './components/List';

const App = () => {
  return (
    <SafeAreaView style={GlobalStyles.AndroidSafeArea}>
      <List />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default App;
