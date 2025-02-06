import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/authStyles';

const LoginScreen = () => {
  // No navigation needed here anymore

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WELCOME!!</Text>

      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder="Username / Email" 
          placeholderTextColor="#aaa" 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Password" 
          placeholderTextColor="#aaa" 
          secureTextEntry 
        />
        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={() => { /* Handle login logic */ }}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* Removed the Register button */}
    </View>
  );
};

export default LoginScreen;