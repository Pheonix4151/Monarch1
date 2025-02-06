import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/authStyles';

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>REGISTER</Text>

      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder="Full Name" 
          placeholderTextColor="#aaa" 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Username / Email" 
          placeholderTextColor="#aaa" 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Phone Number" 
          placeholderTextColor="#aaa" 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Password" 
          placeholderTextColor="#aaa" 
          secureTextEntry 
        />

        <TouchableOpacity style={styles.signUpButton} onPress={() => { /* Handle sign up logic */ }}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      {/* Removed the Sign In button */}
    </View>
  );
};

export default RegisterScreen;