import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen  from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import JobProviderDashboard from './src/screens/JobProviderDashboard';
import JobProviderProfile from './src/screens/JobProviderProfile';
import PaperProviderComponent from './src/screens/PaperProvider';
import JobseekerDashboard from './src/screens/JobseekerDashboard';
import JobSeekerCard from './src/screens/JobSeekerCard';
import LanguageSelectionScreen from './src/screens/LanguageSelectionScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='RegisterScreen'>
      <Stack.Screen name="PaperProvider" component={PaperProviderComponent} options={{ headerShown: false }}/>
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="JobseekerDashboard" component={JobseekerDashboard} options={{ headerShown: false }}/>
      <Stack.Screen name="JobProviderDashboard" component={JobProviderDashboard} options={{ headerShown: false }}/>
      <Stack.Screen name="JobProviderProfile" component={JobProviderProfile} options={{ headerShown: false }}/>
      <Stack.Screen name="JobSeekerCard" component={JobSeekerCard} options={{ headerShown: false }} />
      <Stack.Screen name="LanguageSelectionScreen" component={LanguageSelectionScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
