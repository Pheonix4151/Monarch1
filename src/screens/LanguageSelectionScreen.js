import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


function LanguageSelectionScreen({ navigation }) {
  const languages = [
    { code: "en", label: "English", message: "Please select your language." },
    { code: "te", label: "తెలుగు", message: "దయచేసి మీ భాషను ఎంచుకోండి." },
    { code: "hi", label: "हिन्दी", message: "कृपया अपनी भाषा चुनें।" },
  ];

  return (
    <LinearGradient colors={["#2193b0", "#6dd5ed"]} style={styles.container}>
      <Text style={styles.title}>🌍 Select Language</Text>
      {languages.map((lang) => (
        <TouchableOpacity
          key={lang.code}
          style={styles.languageButton}
          onPress={() => navigation.navigate('PaperProvider')}
        >
          <Text style={styles.languageText}>{lang.label}</Text>
        </TouchableOpacity>
      ))}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  languageButton: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  languageText: {
    fontSize: 18,
    color: "#fff",
  },
});

export default LanguageSelectionScreen;