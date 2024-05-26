import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import MainNavigation from './src/navigations/MainNavigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Colors from './src/theme/Colors';
import ModalHandler from "./src/components/ModalHandler";


const App = () => {

  return (
      <Provider store={store}>
        <StatusBar barStyle={'light-content'} backgroundColor={Colors.black} />
        <SafeAreaView style={styles.container}>
          <ModalHandler/>
          <MainNavigation />
        </SafeAreaView>
      </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
});
