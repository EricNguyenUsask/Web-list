import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
 
import { Provider } from 'react-redux'
 
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
 
import reducer from './src/reducers'
import mySaga from './src/sagas'

import Screen from './src/screen'
 
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(mySaga)
 
export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" hidden />
      <View style={styles.container}>
        <Text>Open your app!</Text>
        <Screen/>
      </View>
    </Provider>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
