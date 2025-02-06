import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';

const RegisterScreen = () => {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <LinearGradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={styles.background}
        >
            <ScrollView contentContainerStyle={styles.container}>
                <Image
                    source={{ uri: 'https://static.vecteezy.com/system/resources/previews/021/548/095/non_2x/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg' }} 
                    style={styles.logo}
                />
                <Text style={styles.title}>Create Account</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Full Name"
                        placeholderTextColor="#aaa"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Age"
                        placeholderTextColor="#aaa"
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Phone Number"
                        placeholderTextColor="#aaa"
                        keyboardType="phone-pad"
                    />
                    <TouchableOpacity
                        style={styles.uploadButton}
                        onPress={pickImage}
                    >
                        <Text style={styles.uploadButtonText}>
                            {image ? 'Change Aadhar Card' : 'Upload Aadhar Card'}
                        </Text>
                        {image && <Image source={{ uri: image }} style={styles.uploadedImage} />}
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        placeholder="Address"
                        placeholderTextColor="#aaa"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#aaa"
                        secureTextEntry
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Confirm Password"
                        placeholderTextColor="#aaa"
                        secureTextEntry
                    />
                    <TouchableOpacity
                        style={styles.signUpButton}
                        onPress={() => {
                            /* Handle sign up logic */
                        }}
                    >
                        <Text style={styles.signUpButtonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        fontSize: 16,
        color: '#333',
    },
    uploadButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        alignItems: 'center',
    },
    uploadButtonText: {
        color: '#333',
        fontSize: 16,
    },
    uploadedImage: {
        width: 100,
        height: 100,
        marginTop: 10,
        borderRadius: 10,
    },
    signUpButton: {
        backgroundColor: '#1e90ff',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    signUpButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default RegisterScreen;
