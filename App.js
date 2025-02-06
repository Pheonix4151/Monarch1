import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen  from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import JobProviderDashboard from './src/screens/JobProviderDashboard';
import JobProviderProfile from './src/screens/JobProviderProfile';
import PaperProviderComponentr from './src/screens/PaperProvider';
import PaperProviderComponent from './src/screens/PaperProvider';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LoginScreen/> */}
      {/* <JobProviderDashboard/> */}
      {/* <JobProviderProfile/> */}
      {/* <RegisterScreen/> */}
      {/* <PaperProviderComponent/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
