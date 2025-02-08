import React from 'react';
import { View, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Provider as PaperProvider, Card, Button, TextInput, Avatar } from 'react-native-paper';
import { launchImageLibrary } from 'react-native-image-picker';

// Placeholder data for the profile
const initialProfileData = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  phone: '123-456-7890',
  companyName: 'Tech Solutions Ltd.',
  companyLocation: 'New York, USA',
  verified: false,
  avatarUri: 'https://fastly.picsum.photos/id/1005/200/200.jpg?hmac=Kf5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5',
};

const JobProviderProfile = () => {
  const [profileData, setProfileData] = React.useState(initialProfileData);

  // Handle updating profile fields
  const handleInputChange = (field, value) => {
    setProfileData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  // Handle profile verification
  const handleVerification = () => {
    Alert.alert('Verification', 'Your profile has been verified!');
    setProfileData((prevState) => ({
      ...prevState,
      verified: true,
    }));
  };

  // Handle profile update
  const handleUpdateProfile = () => {
    Alert.alert('Profile Updated', 'Your profile information has been updated successfully!');
    // In a real app, you would save the updated data to the backend here
  };

  // Handle avatar change
  const handleAvatarChange = () => {
    Alert.alert(
      'Change Profile Picture',
      'Are you sure you want to change your profile picture?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => pickImage(),
        },
      ],
      { cancelable: true }
    );
  };

  // Function to pick image from gallery
  const pickImage = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    });

    if (result.assets && result.assets.length > 0) {
      const selectedImage = result.assets[0];
      setProfileData((prevState) => ({
        ...prevState,
        avatarUri: selectedImage.uri,
      }));
    }
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        {/* Profile Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={handleAvatarChange}>
            <Avatar.Image size={100} source={{ uri: profileData.avatarUri }} />
          </TouchableOpacity>
          <View style={styles.headerText}>
            <TextInput
              label="Full Name"
              value={profileData.name}
              onChangeText={(value) => handleInputChange('name', value)}
              style={styles.input}
              mode="outlined"
            />
            <TextInput
              label="Email"
              value={profileData.email}
              onChangeText={(value) => handleInputChange('email', value)}
              style={styles.input}
              keyboardType="email-address"
              mode="outlined"
            />
          </View>
        </View>

        {/* Profile Information Section */}
        <Card style={styles.card}>
          <Card.Title title="Contact Information" />
          <Card.Content>
            <TextInput
              label="Phone"
              value={profileData.phone}
              onChangeText={(value) => handleInputChange('phone', value)}
              style={styles.input}
              keyboardType="phone-pad"
              mode="outlined"
            />
            <TextInput
              label="Company Name"
              value={profileData.companyName}
              onChangeText={(value) => handleInputChange('companyName', value)}
              style={styles.input}
              mode="outlined"
            />
            <TextInput
              label="Company Location"
              value={profileData.companyLocation}
              onChangeText={(value) => handleInputChange('companyLocation', value)}
              style={styles.input}
              mode="outlined"
            />
          </Card.Content>
        </Card>

        {/* Verification Section */}
        <Card style={styles.card}>
          <Card.Title title="Verification Status" />
          <Card.Content>
            <View style={styles.verificationContainer}>
              <Button
                mode={profileData.verified ? 'contained' : 'outlined'}
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
        <Button
          mode="contained"
          onPress={handleUpdateProfile}
          style={styles.updateButton}
          contentStyle={styles.buttonContent}
        >
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
    backgroundColor: '#f5f5f5',
    marginTop: 25,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    marginLeft: 20,
    flex: 1,
  },
  card: {
    marginBottom: 20,
    borderRadius: 10,
    elevation: 3,
  },
  input: {
    marginBottom: 10,
    backgroundColor: 'white',
  },
  verificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifyButton: {
    marginTop: 10,
  },
  updateButton: {
    marginTop: 20,
    borderRadius: 25,
  },
  buttonContent: {
    paddingVertical: 8,
  },
});

export default JobProviderProfile;
