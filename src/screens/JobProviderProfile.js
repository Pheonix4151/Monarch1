import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { PaperProvider, Card, Button } from 'react-native-paper';

// Placeholder data for the profile
const initialProfileData = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  phone: '123-456-7890',
  companyName: 'Tech Solutions Ltd.',
  companyLocation: 'New York, USA',
  verified: false,
};

const JobProviderProfile = () => {
  const [profileData, setProfileData] = React.useState(initialProfileData);

  // Handle updating profile fields
  const handleInputChange = (field, value) => {
    setProfileData(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  // Handle profile verification
  const handleVerification = () => {
    Alert.alert('Verification', 'Your profile has been verified!');
    setProfileData(prevState => ({
      ...prevState,
      verified: true,
    }));
  };

  // Handle profile update
  const handleUpdateProfile = () => {
    Alert.alert('Profile Updated', 'Your profile information has been updated successfully!');
    // In a real app, you would save the updated data to the backend here
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Job Provider Profile</Text>

        {/* Profile Information Section */}
        <Card style={styles.card}>
          <Card.Title title="Profile Information" subtitle="View and update your details" />
          <Card.Content>
            <TextInput
              label="Full Name"
              value={profileData.name}
              onChangeText={(value) => handleInputChange('name', value)}
              style={styles.input}
            />
            <TextInput
              label="Email"
              value={profileData.email}
              onChangeText={(value) => handleInputChange('email', value)}
              style={styles.input}
              keyboardType="email-address"
            />
            <TextInput
              label="Phone"
              value={profileData.phone}
              onChangeText={(value) => handleInputChange('phone', value)}
              style={styles.input}
              keyboardType="phone-pad"
            />
            <TextInput
              label="Company Name"
              value={profileData.companyName}
              onChangeText={(value) => handleInputChange('companyName', value)}
              style={styles.input}
            />
            <TextInput
              label="Company Location"
              value={profileData.companyLocation}
              onChangeText={(value) => handleInputChange('companyLocation', value)}
              style={styles.input}
            />
          </Card.Content>
        </Card>

        {/* Verification Section */}
        <Card style={styles.card}>
          <Card.Title title="Verification Status" subtitle="Verify your account details" />
          <Card.Content>
            <View style={styles.verificationContainer}>
              <Text style={styles.verificationText}>
                {profileData.verified ? 'Verified' : 'Not Verified'}
              </Text>
              <Button
                mode="contained"
                onPress={handleVerification}
                disabled={profileData.verified}
                style={styles.verifyButton}
              >
                {profileData.verified ? 'Verified' : 'Verify Now'}
              </Button>
            </View>
          </Card.Content>
        </Card>

        {/* Update Profile Button */}
        <Button mode="contained" onPress={handleUpdateProfile} style={styles.updateButton}>
          Update Profile
        </Button>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
    backgroundColor: 'white',
  },
  verificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  verificationText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  verifyButton: {
    marginLeft: 10,
  },
  updateButton: {
    marginTop: 20,
  },
});

export default JobProviderProfile;
