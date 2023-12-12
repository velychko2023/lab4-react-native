
import React from 'react';
import {StyleSheet, useColorScheme} from 'react-native';

import Navigation from './navigation/Navigation';
import {PaperProvider} from 'react-native-paper';

function App(): JSX.Element {
  useColorScheme() === 'dark';
  return (
    <PaperProvider>
      <Navigation />
    </PaperProvider>
  );
}
StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
export default App;
