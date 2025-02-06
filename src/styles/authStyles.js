import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Or your desired background color
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width :'auto',
    // height: 'contentHeight',
    alignSelf:'flex'
  },
  logo: {
    width: 150, // Adjust size as needed
    height: 150, 
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Or your desired text color
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    backgroundColor: '#f0f0f0', // Light gray background for inputs
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: 'blue',
  },
  loginButton: {
    backgroundColor: '#007bff', // Example blue button
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  registerButton: {
    marginTop: 10, // Space between buttons
  },
  registerButtonText: {
    color: '#666',
  },

  // Register Screen Styles
  signUpButton: {
    backgroundColor: '#28a745', // Example green button
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  signUpButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  signInButton: {
    marginTop: 10,
  },
  signInButtonText: {
    color: '#666',
  },
  gradientContainer: {
    flex: 1, // Important: Makes the gradient fill the screen
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
  },
});

export default styles;