<<<<<<< HEAD
import * as React from 'react';
import { SafeAreaView } from 'react-native';
//import PaperProviderComponent from './PaperProvider';
import JobProviderDashboard from './JobProviderDashboard';
//import JobProviderProfile from './JobProviderProfile';
=======
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen  from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
>>>>>>> 064c40ff5fca8d20d4b63a49e0c8a93a375f2b2e

const App = () => {
  return (
<<<<<<< HEAD
    <SafeAreaView style={{ flex: 2 }}>
      <JobProviderDashboard/>
      {/*<PaperProviderComponent/>*/}
      {/* <JobProviderProfile/> */}
    </SafeAreaView>
=======
    <View style={styles.container}>
      {/* <LoginScreen/> */}
      <RegisterScreen/>
      <StatusBar style="auto" />
    </View>
>>>>>>> 064c40ff5fca8d20d4b63a49e0c8a93a375f2b2e
  );
};

export default App;
